import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

import Search from "./Search";
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

  const [filt, setFilt] = useState("");
  const [chanTodo, setChangeTodo] = useState(todo);

  function saerchField(searcValue) {
    setFilt(searcValue);
  }

  useEffect(() => {
    // console.log("filt is change", filt);
    const idtime = setTimeout(
      () =>{
        
        setChangeTodo(
          todo.filter((item) => {
            console.log(filt);
            return item.text.toLowerCase().indexOf(filt.toLowerCase()) !== -1;
          })
        )},
      1000
    );
    return () => clearTimeout(idtime);
  }, [filt]);
  return (
    <div className="App">
      <div className="Todos">TODOS</div>
      <div className="MainDiv">
        <Search saerchField={saerchField} />
        <TodoForm
          onAdd={(text) => {
            if (chanTodo.length < 6) {
              setChangeTodo([
                ...chanTodo,
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
          filt={filt}
          todo={chanTodo}
          onChange={(newtoDo) => {
            setChangeTodo(
              chanTodo.map((item) => {
                if (item.id === newtoDo.id) {
                  return newtoDo;
                }
                return item;
              })
            );
          }}
          onDelete={(delTodoItem) => {
            setChangeTodo(
              chanTodo.filter((item) => item.id !== delTodoItem.id)
            );
          }}
        />
        <TodoFooter
          todo={chanTodo}
          onCompleted={() => {
            setChangeTodo(chanTodo.filter((item) => !item.isComplited));
          }}
        />
      </div>
    </div>
  );
}

export default App;
