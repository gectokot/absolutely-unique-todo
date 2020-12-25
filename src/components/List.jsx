import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todoitem from "./TodoItem";

function List() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    setItems([...items, value]);
    setValue("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const renderedTodos = items.map((item) => <Todoitem todo={item}/>);

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <ul>{renderedTodos}</ul>
    </div>
  );
}

export default List;
