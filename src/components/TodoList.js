import React from "react";

const TodoList = ({ todos, settodos, seteditTodo }) => {
  const deleteTodo = ({ id }) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (todo) => {
    settodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const editTodo = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    seteditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            className={`input-list ${todo.completed ?'complete':''}`}
            value={todo.title}
            onChange={(event) => {
              event.preventDefault();
            }}
          />
          <div>
            <button
              className="complteButton"
              onClick={() => completeTodo(todo)}
            >
              Compleate
            </button>
            <button className="editButton" onClick={() => editTodo(todo)}>
              Edit
            </button>
            <button className="deleteButton" onClick={() => deleteTodo(todo)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
