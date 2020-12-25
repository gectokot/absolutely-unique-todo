import React, { useState } from "react";

function List() {
  const [items, setItems] = useState(["placeholder", "placeholder 2"]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    setItems([...items, value]);
    setValue("");
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const renderedTodos = items.map((item) => <li>{item}</li>);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <ul>{renderedTodos}</ul>
    </div>
  );
}

export default List;
