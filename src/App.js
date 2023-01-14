
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Deletepopup from "./components/Deletepopup";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [Modal, setModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [currTodo, setcurrTodo] = useState(null);

  useEffect(() => {
    console.log("useEffect",currTodo,deleteConfirm);

    if (deleteConfirm) {
        setTodos(todos.filter((todo) => todo.id !== currTodo));
        setDeleteConfirm(false)
        setEditTodo();
    }

    if (editTodo) {
      setInput(editTodo.input);
      setTitle(editTodo.title);
    } else {
      setInput("");
      setTitle("");
    }
  }, [setInput, editTodo, setDeleteConfirm, currTodo, setcurrTodo, deleteConfirm, setDeleteConfirm]);

  return (
    <div className="App">
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            title={title}
            setTitle={setTitle}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
          todos={todos}
          setEditTodo={setEditTodo}
          setModal={setModal}
          setcurrTodo={setcurrTodo}
          />
        </div>
        <div>
          <Deletepopup
            Modal={Modal}
            setModal={setModal}
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
