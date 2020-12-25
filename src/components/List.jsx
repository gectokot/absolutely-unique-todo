import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./TodoForm";
import Todoitem from "./TodoItem";

function List() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    const newItem = { value, id: uuidv4() };
    setItems([...items, newItem]);
    setValue("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteItem = (id) => {
    console.log(id)
    setItems(items.filter((item) => item.id !== id));
  };

  const renderedTodos = items.map((item) => (
    <Todoitem key={item.id} id={item.id} todo={item.value} deleteItem={deleteItem} />
  ));

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
