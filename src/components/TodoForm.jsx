import React, {useState} from "react";

function TodoForm(props) {
  // const [value, setValue] = useState('');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </form>
  );
}

export default TodoForm;
