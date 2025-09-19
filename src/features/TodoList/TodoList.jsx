import TodoListItem from './TodoListItem';
import { useState } from 'react';
import styles from './TodoList.module.css';
function TodoList(props) {
  const { todoList, onCompleteTodo, onUpdateToDo, isLoading } = props;

  const filteredTodoList = todoList.filter((toDo) => {
    return !toDo.isCompleted;
  });

  return (
    <>
      {isLoading ? (
        <p>Todo list loading...</p>
      ) : (
        <ul className={styles.noPadding}>
          {filteredTodoList.length === 0 ? (
            <p>Add to do above to get started</p>
          ) : (
            filteredTodoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onCompleteTodo={onCompleteTodo}
                onUpdateToDo={onUpdateToDo}
              />
            ))
          )}
        </ul>
      )}
    </>
  );
}

export default TodoList;
