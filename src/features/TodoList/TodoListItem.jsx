import TextInputWithLabel from '../../shared/TextInputWithLabel';
import React, { useState } from 'react';
function TodoListItem({ todo, onCompleteTodo, onUpdateToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  const handleUpdate = (event) => {
    if (!isEditing) {
      return;
    }
    event.preventDefault();
    onUpdateToDo({ ...todo, title: workingTitle });
    setIsEditing(false);
  };

  const handleCancel = (event) => {
    setIsEditing(false);
    setWorkingTitle(todo.title);
  };

  const handleEdit = (event) => {
    setWorkingTitle(event.target.value);
  };

  const updateEdit = () => {
    setIsEditing(true);
  };

  return (
    <li key={todo.id}>
      {isEditing ? (
        <React.Fragment>
          <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleUpdate}>Update</button>
        </React.Fragment>
      ) : (
        <form>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => {
              onCompleteTodo(todo.id);
            }}
          />
          <span onClick={updateEdit}>{todo.title}</span>
        </form>
      )}
    </li>
  );
}

export default TodoListItem;
