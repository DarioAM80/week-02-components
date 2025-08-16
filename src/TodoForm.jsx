import { useState, useRef } from 'react';

function TodoForm(props) {
  const todoTitleInput = useRef('');

  const { onAddTodo } = props;

  const [workingToDoTitle, setWorkingToDoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo(workingToDoTitle);
    todoTitleInput.current.focus();
    setWorkingToDoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      {/* is the ID of the label's associated control element.*/}
      <label htmlFor="todoTitle">Todo</label>
      <input
        ref={todoTitleInput}
        id="todoTitle"
        name="title"
        type="text"
        value={workingToDoTitle}
        onChange={(event) => {
          event.preventDefault();
          setWorkingToDoTitle(event.target.value);
        }}
      />
      <button disabled={workingToDoTitle === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
