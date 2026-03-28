import React from "react";
import { useState } from 'react'
import {createTask} from '../services/api';

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const addTask = async (e) => {
        e.preventDefault();
        try {
            const response = await createTask({ title, description });
            console.log("Task created successfully:", response.data);
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };


  return (
    <div>
        <div className="header">
            <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
        </div>
        <div className="content">
            <p className="text-gray-600">Fill in the details to create a new task.</p >
            <form className="mt-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Task Title

                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Task Description
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter task description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={addTask}>
                    Add
                </button>
            </form>
        </div>
    </div>
  );
};

export default CreateTask;