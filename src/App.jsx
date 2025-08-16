import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
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
    console.log(updatedTodos);
    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
    </div>
  );
}

export default App;
