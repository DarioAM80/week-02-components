import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import { useEffect, useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, isCompleted: false };
    setTodoList([...todoList, newTodo]);
  };

  const completeTodo = (id) => {
    let updatedTodos = todoList.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, isCompleted: true };
      } else {
        return toDo;
      }
    });
    setTodoList(updatedTodos);
  };

  const updateToDo = (editedTodo) => {
    const updatedToDos = todoList.map((toDo) => {
      if (toDo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return toDo;
      }
    });
    setTodoList(updatedToDos);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateToDo={updateToDo}
      />
    </div>
  );
}

export default App;
