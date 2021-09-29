/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        {' '}
        {this.props.todo.title}
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
