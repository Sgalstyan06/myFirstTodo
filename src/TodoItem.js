function TodoItem({ todo, onChange, onDelete }) {
  return (
    <div className="TodoItem">
      <label >
        <input
          type="checkbox"
          checked={todo.isComplited}
          onChange={(ev) => {
            onChange({
              ...todo,
              isComplited: ev.target.checked,
            });
          }}
        />
        {todo.text}
       
      </label>
     <div> <button className="Itembtn" onClick={() => onDelete(todo)}>x</button></div>
    </div>
  );
}

export default TodoItem;
