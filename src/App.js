import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
const initialState = JSON.parse(localStorage.getItem("todos"))||[];
  const [input, setinput] = useState("");
const [todos, settodos] = useState(initialState);
const [editTodo, seteditTodo] = useState(null);

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos])

  return (
    <div className="column__flex">
  <Header />
    <Form input={input} setInput={setinput} todos={todos} settodos={settodos} editTodo={editTodo} seteditTodo={seteditTodo}/>
    <ul id="js__list" className="t_head">
      <TodoList todos={todos} settodos={settodos} seteditTodo={seteditTodo} />
    </ul>
 </div>
  );
}

export default App;
