
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
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [Confirm, setConfirm] = useState(null);

  useEffect(() => {
    if (Confirm) {
      setDeleteConfirm(true);
    }

    if (editTodo) {
      setInput(editTodo.input);
      setTitle(editTodo.title);
    } else {
      setInput("");
      setTitle("");
    }
  }, [setInput, editTodo, setDeleteConfirm, Confirm]);

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
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            Modal={Modal}
            setModal={setModal}
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
            Confirm={Confirm}
          />
        </div>
        <div>
          <Deletepopup
            Modal={Modal}
            setModal={setModal}
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
            Confirm={Confirm}
            setConfirm={setConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
