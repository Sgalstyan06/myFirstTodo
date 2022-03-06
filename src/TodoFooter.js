function TodoFooter({todo,onCompleted}){
    const completSise = todo.filter(item=>item.isComplited).length;
    return(
        <div>
            <span>{completSise}/{todo.length} completed</span>
            <button onClick={onCompleted}>
                Clear Comleted
            </button>
        </div>
    )
}
export default TodoFooter;