import { useEffect, useRef } from 'react';

function TodoForm(props) {
  const todoTitleInput = useRef('');

  const { onAddTodo } = props;

  const handleAddTodo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    onAddTodo(title);
    event.target.title.value = '';
    todoTitleInput.current.focus();
  };

  return (
    <form onSubmit={handleAddTodo}>
      {/* is the ID of the label's associated control element.*/}
      <label htmlFor="todoTitle">Todo</label>
      <input ref={todoTitleInput} id="todoTitle" name="title" type="text" />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
