import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex items-center justify-center gap-3 mt-10"
    >
      <input
        type="text"
        className="
          w-full max-w-md
          bg-gray-900 
          text-white 
          placeholder-gray-400
          border border-gray-700
          rounded-lg
          px-4 py-3
          outline-none
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500
          transition
        "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          font-semibold
          px-6 py-3
          rounded-lg
          transition
          shadow-md
        "
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;