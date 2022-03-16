import { useCallback, useState } from "react";



function TodoForm({onAdd,filter}) {
  const [searchText,setsearchText] = useState("");
  const [text, setText] = useState("");
  
  return (
    <div className="Todoform">
        <form 
      onSubmit={(ev) => {
        ev.preventDefault();
        if(text!=="")onAdd(text);          
              
        setText("");
      }}
    >
      
      <input
        type="text"
        value={text}
        onChange={(ev) =>{ setText(ev.target.value);         
           
        } }
      />
      
      
      <button>ADD</button>
     
    </form>
    
    </div>
  );
}

export default TodoForm;
