import React from "react";
import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-regular/Trash";

const Todo = styled.li`
  height: 100%;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  background: #e6e6fa;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  overflow-wrap: anywhere;
`;

const DeleteButton = styled.span`
  border-radius: 3px;
  padding-top: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin: -10px;
  width: 0;
  transition: width 0.25s;
  ${Todo}:hover & {
    width: 32px;
  }
`;

function TodoItem(props) {
  return (
    <Todo>
      {props.todo}
      <DeleteButton>
        <Trash size="32" onClick={() => props.deleteItem(props.id)} />
      </DeleteButton>
    </Todo>
  );
}

export default TodoItem;
