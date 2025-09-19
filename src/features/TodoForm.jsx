import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';
import styled from 'styled-components';

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

  const DisabledButton = styled.button`
    font-style: ${(props) => (props.disabled ? 'italic' : 'none')};
    font-weight: 800;
  `;
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

      <DisabledButton disabled={workingToDoTitle.trim() === ''}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </DisabledButton>
    </form>
  );
}

export default TodoForm;
