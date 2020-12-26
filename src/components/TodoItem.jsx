import React from "react";
import styled from 'styled-components'

const Todo = styled.li`
  font-size: 18px;
  padding: 10px;
  width: 100%;
  background: #E6E6FA;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
`

function TodoItem(props) {
  return (
    <Todo>
      {props.todo}
      <Button onClick={() => props.deleteItem(props.id)}>X</Button>
    </Todo>
  );
}

export default TodoItem;
