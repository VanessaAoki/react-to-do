import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

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

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }

  render () {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    )
  }
}

export default TodoContainer;
