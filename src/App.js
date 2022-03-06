import React from "react";
import ToDoList from "./ToDoList";
import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  const [todo, setTodo] = useState([
    {
      id: Math.random(),
      text: "Learn Javascript",
      isComplited: false,
    },
    {
      id: Math.random(),
      text: "Learn Java",
      isComplited: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isComplited: false,
    },
  ]);
  return (
    <div className="App">
      <div className="Todos">TODOS</div>
      <div className="MainDiv">
        <TodoForm
          onAdd={(text) => {
            if(todo.length<6){
              setTodo([
                ...todo,
                {
                  id: Math.random(),
                  text: text,
                  isComplited: false,
                },
              ]);
            }
            
          }}
        />
        <ToDoList
          todo={todo}
          onChange={(newtoDo) => {
            setTodo(
              todo.map((item) => {
                if (item.id === newtoDo.id) {
                  return newtoDo;
                }
                return item;
              })
            );
          }}
          onDelete={(delTodoItem) => {
            setTodo(todo.filter((item) => item.id !== delTodoItem.id));
          }}
        />
        <TodoFooter
          todo={todo}
          onCompleted={() => {
            setTodo(todo.filter((item) => !item.isComplited));
          }}
        />
      </div>
    </div>
  );
}

export default App;
