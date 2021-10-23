import React from 'react';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Atividade 1",
        completed: true
      },
      {
        id: 2,
        title: "Atividade 2",
        completed: true
      },
      {
        id: 3,
        title: "Atividade 3",
        completed: true
      },
      {
        id: 4,
        title: "Atividade 4",
        completed: true
      },
    ]
  }
  render () {
    return (
      <ul>
        {this.state.todos.map(todo => (
          <li>{todo.title}</li>
        ))}
      </ul>
    )
  }
}

export default TodoContainer;
