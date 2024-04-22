import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-white">Manage your Todos</h2>
        <form onSubmit={handleSubmit} className="mt-16">
          <div className="flex items-center">
            <input
              type="text"
              value={todo}
              placeholder={"Write Your ToDo"}
              className="py-2 px-4 bg-gray-700 text-white rounded-md mr-4 border"
              onChange={handleInput}
            />
            <button
              type="submit"
              className="text-lg bg-black text-white py-2 px-6 rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
