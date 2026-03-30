import React from "react";
import { useState, useEffect } from 'react'
import EachTask from "./EachTask";

const TasksList = ({ fetchTasks, pendingTasks, completedTasks }) => {


  useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <div>   
        <div className="header">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        </div>  
        <div className="content">
            {pendingTasks.length === 0 && completedTasks.length === 0 ? (
                <p className="text-gray-600">No tasks available. Please create a new task.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {pendingTasks.map((task) => (
                        <EachTask key={task.id} task={task} refreshTasks={fetchTasks} />
                    ))}
                    {completedTasks.map((task) => (
                        <EachTask key={task.id} task={task} refreshTasks={fetchTasks} />
                    ))}
                </ul>
            )}
        </div>  
    </div>  
    );
}

export default TasksList;   