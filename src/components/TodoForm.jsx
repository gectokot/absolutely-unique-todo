import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder="Enter Todo"
        required
      />
    </form>
  );
}

export default TodoForm;
