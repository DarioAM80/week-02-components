import TodoListItem from './TodoListItem';
import { useState } from 'react';
function TodoList(props) {
  const { todoList } = props;

  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
