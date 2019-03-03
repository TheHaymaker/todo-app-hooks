import React, { useState } from 'react';
import './TodoForm.css';

type todoInfo = { todos: Array<todoType>; saveTodos: Function };
type todoType = {
  name: string;
  completed: boolean;
};

const TodoForm = ({ todos, saveTodos }: todoInfo) => {
  const [value, setValue] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        saveTodos([...todos, { name: value, completed: false }]);

        setValue('');
      }}
    >
      <input
        placeholder="Add Todo"
        onChange={e => setValue(e.target.value)}
        type="text"
        value={value}
      />
    </form>
  );
};

export default TodoForm;
