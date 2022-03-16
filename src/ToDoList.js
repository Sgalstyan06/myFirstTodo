import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function ToDoList({todo,onChange,onDelete}){
    const [ searchfilt,setSearchFilt] = useState();
    const [rendTodo,setRenTodo] = useState(todo);
    useEffect(()=>{

    },[searchfilt])
   return (
   <>
    {todo.map((item)=>{
        return(
            <div >
              <TodoItem 
              key = {item.id} 
              todo = {item}
              onChange= {onChange}
              onDelete= {onDelete}
              /> 
            </div>
        )
    })}
    </>
    )
}
export default ToDoList;