import React from "react";
import { useState, useEffect } from 'react'
import { getTasks } from "../services/api";
import EachTask from "./EachTask";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>   
        <div className="header">
            <h1 className="text-2xl font-bold mb-4">Tasks List</h1>
        </div>  
        <div className="content">
            <p className="text-gray-600">Here you can see all your tasks.</p >
            <ul className="list-disc pl-5">
                {tasks.map((task) => (
                    <EachTask key={task.id} task={task} />
                ))}
            </ul>
        </div>  
    </div>  
    );
}

export default TasksList;   