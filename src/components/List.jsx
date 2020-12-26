import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from 'styled-components'

import TodoForm from "./TodoForm";
import Todoitem from "./TodoItem";

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`




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
      <TodoList>{renderedTodos}</TodoList>
    </div>
  );
}

export default List;
