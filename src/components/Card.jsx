import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task, deleteTask }) => {
  const { _id, title, description, timestamp } = task;

  return (
    <div>
      <div className="card w-80">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Title: {title}</h2>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p>
            <span className="font-semibold">Date & Time:</span>{" "}
            {new Date(timestamp).toLocaleString()}
          </p>
          <div className="card-actions justify-between">
            <Link to={`/update/${_id}`}>
              <button className="btn text-green-500 mt-1">Edit</button>
            </Link>
            <button
              onClick={() => deleteTask(_id)}
              className="btn btn-ghost text-red-500 mt-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


