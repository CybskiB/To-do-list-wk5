import React, { useState } from 'react';
import editIcon from './edit.png';
import checkIcon from './checked.png';
import deleteIcon from './delete.png';
import archiveIcon from './archive.png';

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo, archiveTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </span>
          <img
            src={todo.completed ? checkIcon : checkIcon}
            alt="Complete"
            className="check-icon"
            onClick={() => toggleComplete(todo.id)}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={editIcon}
            alt="Edit"
            className="edit-icon"
            onClick={handleEdit}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={deleteIcon}
            alt="Delete"
            className="delete-icon"
            onClick={() => deleteTodo(todo.id)}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={archiveIcon}
            alt="Archive"
            className="archive-icon"
            onClick={() => archiveTodo(todo.id)}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
    </li>
  );
};

export default TodoItem;