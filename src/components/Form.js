import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, settodos, editTodo, seteditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    settodos(newTodo);
    seteditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!editTodo) {
      settodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        className="input-text"
        value={input}
        required
        onChange={onChangeInput}
        placeholder="Add ToDo List"
      />
      <button type="submit" className="addButton">
        {editTodo ? 'Ok':'Add'} 
      </button>
    </form>
  );
};

export default Form;
