import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ task, deleteTask }) => {
    // console.log(task)
    const {_id, title, description} = task || {}
    return (
        <div>
           <div className="card bg-gray-100 border w-80">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Title : {title}</h2>
    <p><span className='font-semibold'>Description :</span> {description}</p>
    <p><span className='font-semibold'>Date&Time:</span> {new Date(task.timestamp).toLocaleString()}</p>
    <div className="card-actions justify-between">
      <Link to={`/update/${_id}`}>
      <button className="btn text-green-500 mt-1">Edit</button>
      </Link>
      <button  onClick={() => deleteTask(task._id)}
        className="btn btn-ghost text-red-500 mt-1">Delete</button>
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Category</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>To-Do</a></li>
    <li><a>In progress</a></li>
    <li><a>Done</a></li>
  </ul>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;