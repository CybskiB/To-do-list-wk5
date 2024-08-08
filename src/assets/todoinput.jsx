import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className = "new-task-container">
    <form onSubmit={handleSubmit}>
      <input className="input-box"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">+</button>
    </form>
    </div>
  );
};

export default TodoInput;