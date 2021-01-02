import React, { useState } from "react";
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

const Item = styled.input`
  outline-width: 0;
  font-size: 18px;
  background: #e6e6fa;
  border: none;
  width: 100%;
  &::placeholder {
    font-size: 18px;
    color: black;
  }
`;

const DeleteButton = styled.span`
  overflow: hidden;
  border-radius: 3px 0 0 3px;
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
  const sumbitAndDontReload = (e) => {
    e.preventDefault();
    props.submitEdited(props.id);
  }

  return (
    <Todo>
      <form action="" onSubmit={sumbitAndDontReload}>
        <Item
          type="text"
          defaultValue={props.todo}
          value={props.editedText}
          onChange={props.handleEditing}
          onClick={props.changeState}
          onBlur={sumbitAndDontReload}
        />
      </form>
      <DeleteButton>
        <Trash size="32" onClick={() => props.deleteItem(props.id)} />
      </DeleteButton>
    </Todo>
  );
}

export default TodoItem;
