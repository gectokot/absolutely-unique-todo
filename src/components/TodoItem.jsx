import React from "react";

function TodoItem(props) {
  return (
    <li>
      {props.todo}
      <button onClick={() => props.deleteItem(props.id)}>X</button>
    </li>
  );
}

export default TodoItem;
