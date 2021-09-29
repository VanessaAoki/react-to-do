/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';

function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem;
