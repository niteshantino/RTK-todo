// import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { Routes, Route } from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-yellow-50 p-5 mt-10">
            <AddTodo />
            <Todos />
          </div>
        }
      />
      <Route path="/update/:id" element={<UpdateTodo />} />
    </Routes>
  );
}

export default App;
