// Home.js
import React from "react";
import AddTodo from "./AddTodo";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Todos from "./Todos";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-bl from-indigo-500 to-blue-200  ">
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  );
}

export default Home;
