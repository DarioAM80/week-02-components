import TodoListItem from './TodoListItem';
import { useState } from 'react';
function TodoList() {
  let todos = [
    { id: 1, title: 'review resources' },
    { id: 2, title: 'take notes' },
    { id: 3, title: 'code out app' },
  ];

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
