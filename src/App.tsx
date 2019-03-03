import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App = () => {
  const initialState: Array<Todo> = [];
  const [todos, saveTodos] = useState(initialState);

  const deleteTodo = (index: number) => {
    const items = todos;
    items.splice(index, 1);
    saveTodos([...items]);
  };

  const completeTodo = (index: number) => {
    const items = todos;
    items[index].completed = !items[index].completed;
    saveTodos([...items]);
  };
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoForm todos={todos} saveTodos={saveTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  );
};

export default App;
