import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm(props) {
  const todoTitleInput = useRef('');

  const { onAddTodo, isSaving } = props;

  const [workingToDoTitle, setWorkingToDoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: workingToDoTitle,
      isCompleted: false,
    };
    onAddTodo(newTodo);
    todoTitleInput.current.focus();
    setWorkingToDoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      {/* is the ID of the label's associated control element.*/}
      <TextInputWithLabel
        elementId={'todoTitle'}
        labelText={'Todo'}
        ref={todoTitleInput}
        value={workingToDoTitle}
        onChange={(event) => {
          event.preventDefault();
          setWorkingToDoTitle(event.target.value);
        }}
      />

      <button disabled={workingToDoTitle.trim() === ''}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
