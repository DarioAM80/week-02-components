import TodoListItem from './TodoListItem';
import { useState } from 'react';
function TodoList(props) {
  const { todoList, onCompleteTodo } = props;

  const filteredTodoList = todoList.filter((toDo) => {
    return !toDo.isCompleted;
  });
  console.log(filteredTodoList);
  return (
    <>
      <ul>
        {filteredTodoList.length === 0 ? (
          <p>Add to do above to get started</p>
        ) : (
          filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
            />
          ))
        )}
      </ul>
    </>
  );
}

export default TodoList;
