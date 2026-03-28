import React from "react";
import { useState, useEffect } from 'react'
import EachTask from "./EachTask";

const TasksList = ({ fetchTasks, tasks }) => {


  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>   
        <div className="header">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        </div>  
        <div className="content">
            {tasks.length === 0 ? (
                <p className="text-gray-600">No tasks available. Please create a new task.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {tasks.map((task) => (
                        <EachTask key={task.id} task={task} refreshTasks={fetchTasks} />
                    ))}
                </ul>
            )}
        </div>  
    </div>  
    );
}

export default TasksList;   