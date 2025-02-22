import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Card from "./Card";

const categories = ["To-Do", "In Progress", "Done"];

const TaskBoard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  // fetch
  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/${user.email}`);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  // Add task 
  const addTask = async () => {
    if (!newTask.title.trim()) return alert("Title is required (max 50 chars)");

    try {
      const newTaskWithCategory = {
        ...newTask,
        category: "To-Do", 
      };

      const res = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, newTaskWithCategory);
      setTasks([...tasks, res.data]);
      setNewTask({ title: "", description: "" });

      fetchTasks();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  // Update task 
  const updateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, updatedTaskData);

      if (response.status === 200) {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === taskId ? response.data : task
          )
        );
      }
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  // delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  // Handle drag 
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };


  const handleDrop = async (e, newCategory) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
  
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, category: newCategory } : task
      )
    );
  
    //  Update the category in the backend
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
        category: newCategory,
      });
    } catch (error) {
      console.error("Error updating task category:", error);
    }
  };
  

  return (
    <div className="w-10/12 mx-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Task Management</h1>

        {/* Add Task */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Task Title"
            maxLength={50}
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="text"
            placeholder="Description"
            maxLength={200}
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="border p-2 rounded w-1/3"
          />
          <button onClick={addTask} className="bg-purple-500 text-white p-2 rounded">
            Add Task
          </button>
        </div>

      
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
          
          {categories.map((category) => (
  <div
    key={category}
    className="bg-green-200 p-4 rounded shadow min-h-[200px]"
    onDragOver={(e) => e.preventDefault()} 
    onDrop={(e) => handleDrop(e, category)} 
  >
    <h2 className="text-xl font-semibold mb-3">{category}</h2>
    {tasks
      .filter((task) => task.category === category)
      .map((task) => (
        <div
          key={task._id}
          draggable
          onDragStart={(e) => handleDragStart(e, task._id)}
          className="bg-white p-3 rounded shadow mb-2 cursor-pointer"
        >
          <Card task={task} deleteTask={deleteTask} />
        </div>
      ))}
  </div>
))}
        </div>

        <Link to="/">
          <button className="btn bg-purple-500 mt-5">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default TaskBoard;






