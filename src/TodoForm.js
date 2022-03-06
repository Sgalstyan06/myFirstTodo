import { useCallback, useState } from "react";


function TodoForm({onAdd}) {
  const [text, setText] = useState("");
  return (
    <div className="Todoform">
        <form 
      onSubmit={(ev) => {
        ev.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button>ADD</button>
    </form>
    </div>
  );
}

export default TodoForm;