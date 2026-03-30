import React from "react";
import { useState } from 'react'
import { getTasks } from "../services/api";
import TasksList from "./TasksList";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  const [createTaskVisible, setCreateTaskVisible] = useState(false);
    
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            console.log("Tasks fetched successfully:", response);
            setPendingTasks(response.filter(task => task.status !== "completed").sort((a, b) => b.created_at - a.created_at));
            setCompletedTasks(response.filter(task => task.status === "completed").sort((a, b) => b.created_at - a.created_at));
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setCreateTaskVisible(false);
        }
    };
  return (
    <div>   
        <div className="header">
            <h1 className="text-4xl font-bold mb-4 text-center">Task Manager</h1>
        </div>
        <div className="content flex justify-end mb-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => setCreateTaskVisible(!createTaskVisible)}>
                {createTaskVisible ? "Close" : "Create Task"}
            </button>
        </div>
        {createTaskVisible && <CreateTask refreshTasks={fetchTasks} />}
        <TasksList fetchTasks={fetchTasks} pendingTasks={pendingTasks} completedTasks={completedTasks} />
    </div>
    );

};

export default Dashboard;