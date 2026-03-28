import React from "react";
import { updateTask, deleteTask } from "../services/api";

const EachTask = ({ task }) => {
    console.log(task);
    const taskCompletedFunc = async () => {
        try {
            const response = await updateTask(task.id, { ...task, status: "completed" });
            console.log("Task updated successfully:", response);
        } catch (error) {
            console.error("Error updating task:", error);
        }   
    };

    const deleteTaskFunc = async () => {
        try {
            const response = await deleteTask(task.id);
            console.log("Task deleted successfully:", response);
        }
        catch (error) {
            console.error("Error deleting task:", error);
        }
    };
  return (
    <div className="task-item flex p-4 border rounded mb-2">
        <div className="flex-1">
            <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Status: {task.status}</p>
        </div>
        
        <div>
           
            {task.status === "Pending" && (
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={taskCompletedFunc}>Completed</button>
            )}  
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={deleteTaskFunc}>Delete</button>
        </div>
    </div>
    );
}

export default EachTask;