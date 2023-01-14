import React from "react";
import { v4 as uuidv4 } from "uuid";

const form = ({
  input,
  setInput,
  title,
  setTitle,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, input, id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { title, input, id };
      } else return todo;
    });
    setTodos(newTodo);
    setEditTodo("");
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: title, input: input }]);
      setInput("");
      setTitle("");
    } else {
      updateTodo(title, input, editTodo.id);
    }
    setTitle("");
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <div className="form-container">
        <div className="form-item1">
          <div>
            <input
              className="title-input"
              type="text"
              placeholder="Title..."
              value={title}
              required
              onChange={onTitleChange}
            />
          </div>
          <div>
            <textarea
              className="desc-input"
              type="text"
              placeholder="Input..."
              value={input}
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <button className="form-btn">
          <div>
            <span type="submit">{!editTodo ? <h4>+</h4> : "UPDATE"}</span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default form;
