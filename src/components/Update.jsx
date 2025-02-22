import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = () => {
    const [task, setTask] = useState([]); 
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchTask();
        }
    }, [id]);

    const fetchTask = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
            setTask(res.data); 
        } catch (error) {
            console.error("Error fetching task", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${id}`, task);
            toast.success("Task updated successfully!");
            navigate("/task");
        } catch (error) {
            console.error("Error updating task", error);
        }
    };

    return (
        <div className="w-6/12 mx-auto mt-10 bg-green-400 rounded-2xl px-9 py-9">
            <h2 className="text-center font-bold text-2xl mb-6">Update your task</h2>
            <input 
                type="text" 
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Title" 
                className="input input-bordered w-full mb-5" 
            />
            <input 
                type="text" 
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Description" 
                className="input input-bordered w-full mb-7" 
            />
            <button onClick={handleUpdate} className="btn px-4 py-2 text-green-700">
                Update
            </button>
            <Link to="/task"><button className="text-red-600 btn ml-5">
                Cancel
            </button></Link>
            <Toaster />
        </div>
    );
};

export default Update;


