"use client";

import { useState } from "react";

export default function AddPage() {
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    setTitle("");
    alert("Task Added!");
  };

  return (
    <main className="p-4">
      <h2 className="text-xl mb-2">Add New Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-2 py-1"
      />
      <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white px-3 py-1">
        Add
      </button>
    </main>
  );
}
