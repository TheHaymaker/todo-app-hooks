import React from 'react';
import { TodoListProps } from '../types';
import './TodoList.css';
import TrashIcon from './TrashIcon';

const TodoList = ({ todos, deleteTodo, completeTodo }: TodoListProps) => {
  return (
    <div className="todolist-wrapper">
      {todos.length
        ? todos.map((todo, index) => (
            <div className={`todoItem ${todo.completed ? 'completed' : ''}`} key={index}>
              <input
                type="checkbox"
                name={todo.name}
                value={todo.name}
                onChange={() => completeTodo(index)}
              />
              <span>{todo.name}</span>
              <TrashIcon deleteTodo={deleteTodo} todo={index} />
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoList;
