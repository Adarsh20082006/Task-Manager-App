import React from "react";
import { useState } from 'react'
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  const [createTaskVisible, setCreateTaskVisible] = useState(false);

  return (
    <div>   
        <div className="header">
            <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        </div>
        <div className="content">
            <p className="text-gray-600">Manage all your tasks efficiently here.</p >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCreateTaskVisible(!createTaskVisible)}>
                {createTaskVisible ? "Close" : "Create Task"}
            </button>
        </div>
        {createTaskVisible && <CreateTask />}
        <TasksList />
    </div>
    );

};

export default Dashboard;