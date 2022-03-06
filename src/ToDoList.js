import TodoItem from "./TodoItem";

function ToDoList({todo,onChange,onDelete}){
   return (
   <>
    {todo.map(item=>{
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