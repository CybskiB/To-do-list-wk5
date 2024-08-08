import React from 'react';
import TodoItem from './todoitem';

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo, archiveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          archiveTodo={archiveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;