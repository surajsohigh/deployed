import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";

function ToDoApp() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default ToDoApp;
