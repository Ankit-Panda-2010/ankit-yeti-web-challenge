"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleAddTodo() {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleRemoveTodo(idx: number) {
    setTodos(todos => todos.filter((_, i) => i !== idx));
  }

  return (
    <div>
      <h1>YETI Web Challenge</h1>
      <p>
        This is a simple todo list app built with Next.js, Tailwind CSS, and
        shadcn/ui.
      </p>
      {/* TODO: Your code here */}
      <div className="flex gap-2 mt-4">
        <Input className="w-64" placeholder="Input Todo..." value={todo}
          onChange={e => setTodo(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") handleAddTodo(); }}/>
        <Button className="bg-blue-500 ..." onClick={handleAddTodo} >Add</Button>
      </div>
      <ul className="mt-6 space-y-2">
        {todos.map((item, idx) => (
          <li key={idx}>
            <button
              className="w-64 text-left px-3 py-2 rounded border border-input bg-background hover:bg-accent transition cursor-pointer shadow-sm"
              onClick={() => handleRemoveTodo(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      {/* You can branch out of this file to create new files in the src/app/components folder if needed */}
    </div>
  );
}
