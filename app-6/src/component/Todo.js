import React from "react";

function Todo(props) {

  
  return (
    <div>
      {props.task}
          <button onClick={props.delTodo}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
