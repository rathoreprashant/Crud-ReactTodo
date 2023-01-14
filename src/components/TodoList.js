import React from "react";
import Notask from "./Notask";

const TodoList = ({
  todos,
  setEditTodo,
  setModal,
  setcurrTodo
}) => {
  const handleDelete = ({ id }) => {
    setModal(true);
    setcurrTodo(id);
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    console.log(findTodo);
    
    setEditTodo(findTodo);
  };
  if (!todos[0]) {
    return (
      <div className="todo-containerr">
        {" "}
        <Notask />
      </div>
    );
  } else {
    return (
      <div className="todo-containerr">
        {todos.map((todo) => (
          <div className="todo-items">
            <li className="todo-item" key={todo.id}>
              <div>
                <span>{todo.title}</span>
                <p>{todo.input}</p>
              </div>

              <div className="item-btn">
                <button
                  className="btn-edit task-btn"
                  onClick={() => handleEdit(todo)}
                >
                  <i class="bi bi-pencil-fill icon"></i>
                </button>
                <button
                  className="button-delete task-btn"
                  onClick={() => handleDelete(todo)}
                >
                  <i class="bi bi-x icon"></i>
                </button>
              </div>
            </li>
          </div>
        ))}
      </div>
    );
  }
};

export default TodoList;
