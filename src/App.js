import { useState } from "react";
import Header from "./components/Header";
import './App.css'
import Form from "./components/Form";
import Todos from "./components/Todos";

function App(){
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  const [check, setCheck] = useState([]);

  const id = todos.length

  return <>
    <div>
      <Header count = {id}/>
    </div>
    <div>
      <Form 
      input = {input}
      setInput = {setInput}
      todos = {todos}
      setTodos = {setTodos}
      isEdit = {isEdit}
      setIsEdit = {setIsEdit}
      editTodo = {editTodo}
      />
    </div>
    <div>
      <Todos 
      todos = {todos}
      setTodos = {setTodos}
      setInput = {setInput}
      editTodo = {editTodo}
      setEditTodo = {setEditTodo}
      setIsEdit = {setIsEdit}
      check = {check}
      setCheck = {setCheck}
      />
    </div>
  </>
}

export default App;