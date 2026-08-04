import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // update ke liye
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const editHandler = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const updateHandler = (id) => {
    if (editText.trim() === "") return;

    dispatch(
      updateTodo({ 
        id: id,
        text: editText,
      })
    ); 
 
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="max-w-xl mx-auto mt-8">

      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Todo List
      </h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between gap-4 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-lg"
          >
        
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 outline-none focus:border-blue-500"
              />
            ) : (
              <span className="text-lg flex-1">
                {todo.text}
              </span>
            )}

            
            <div className="flex gap-3">

              {editId === todo.id ? (
                <button
                  onClick={() => updateHandler(todo.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => editHandler(todo)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition"
                >
                  Edit
                </button>
              )}


              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition"
              >
                Delete
              </button>

            </div>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default Todos;