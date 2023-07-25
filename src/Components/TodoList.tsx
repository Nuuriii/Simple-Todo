// src/components/TodoList.tsx

//import React,  useState, dan useEffect
import React, { useState, useEffect } from "react";
//import konfigurasi local storage
import {
   ToLocalStorage,
   GetFromLocalStorage,
} from "../Utils/LocalStorage.todo";
//buat tipe data alternatif dengan interface
interface TodoItem {
   //id dengan tipe number
   id: number;
   //text dengan tipe string
   text: string;
   //isDone dengan tipe boolean
   isDone: boolean;
}

const TodoList: React.FC = () => {
   //buat state untuk menyimpan todoLis
   const [todos, setTodos] = useState<TodoItem[]>([]);
   //buat state untuk menyimpan tugas baru
   const [newTodo, setNewTodo] = useState<string>("");

   useEffect(() => {
      // Ketika komponen dipasang, coba ambil data to-do dari local storage
      const storedTodos = GetFromLocalStorage("todos");
      if (storedTodos !== null) {
         setTodos(storedTodos);
      }
   }, []);

   const handleAddTodo = () => {
      if (newTodo.trim() === "") {
         return;
      }

      const newTodoItem: TodoItem = {
         id: Date.now(),
         text: newTodo,
         isDone: false,
      };

      setTodos([...todos, newTodoItem]);
      ToLocalStorage("todos", [...todos, newTodoItem]);

      // Reset input setelah menambahkan to-do
      setNewTodo("");
   };

   const handleRemoveTodo = (id: number) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      ToLocalStorage("todos", updatedTodos);
   };

   const handleToggleTodo = (id: number) => {
      const updatedTodos = todos.map((todo) =>
         todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
      setTodos(updatedTodos);
      ToLocalStorage("todos", updatedTodos);
   };

   return (
      <div>
         <div>
            <input
               type='text'
               value={newTodo}
               onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
         </div>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  <span
                     style={{
                        textDecoration: todo.isDone ? "line-through" : "none",
                     }}
                     onClick={() => handleToggleTodo(todo.id)}
                  >
                     {todo.text}
                  </span>
                  <button onClick={() => handleRemoveTodo(todo.id)}>
                     Remove
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TodoList;
