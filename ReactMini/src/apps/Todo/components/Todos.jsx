// Todos.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft } from "react-icons/fa6";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="space-y-3 w-80 border rounded-lg">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow-lg"
          >
            <span className="text-white">{todo.text}</span>
            <div className="flex flex-row gap-3 text-white text-xl font-bold">
              <CiEdit className="text-green-600" />
              <FaDeleteLeft
                className="text-red-700"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
