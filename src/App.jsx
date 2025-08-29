import './App.css';
import TodoList from './features/TodoList/TodoList';
import TodoForm from './features/TodoForm';
import React, { useEffect, useState } from 'react';
import { sendRequest } from './util/util';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [sortField, setSortField] = useState('createdTime');
  const [sortDirection, setSortDirection] = useStated('desc');

  const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
  const token = `Bearer ${import.meta.env.VITE_PAT}`;

  const addTodo = async (newTodo) => {
    const payload = {
      records: [
        {
          fields: {
            title: newTodo.title,
            isCompleted: newTodo.isCompleted,
          },
        },
      ],
    };
    const options = {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    setIsSaving(true);
    const resptest = await sendRequest(
      url,
      options,
      setErrorMessage,
      'Error adding new todo...'
    );

    const { records } = await resptest.json();
    const savedTodo = { id: records[0].id, title: records[0].fields.title };
    if (!records[0].fields.isCompleted) {
      savedTodo.isCompleted = false;
    }

    setTodoList([...todoList, savedTodo]);

    setIsSaving(false);
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

  const updateToDo = async (editedTodo) => {
    const originalTodo = todoList.find((todo) => todo.id === editedTodo.id);
    const payload = {
      records: [
        {
          id: editedTodo.id,
          fields: {
            title: editedTodo.title,
            isCompleted: editedTodo.isCompleted,
          },
        },
      ],
    };
    const options = {
      method: 'PATCH',
      headers: { Authorization: token, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    };
    try {
      setIsSaving(true);
      const resp = await fetch(url, options);
      console.log(resp);
      if (!resp.ok) {
        throw new Error('Error saving todo...');
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage(`${error.message}. Reverting todo...`);
      const revertedTodos = todoList.map((todo) => {
        if (todo.id == editedTodo.id) {
          return originalTodo;
        }
        return todo;
      });

      setTodoList([...revertedTodos]);
    } finally {
      setIsSaving(false);
    }

    /* const updatedToDos = todoList.map((toDo) => {
      if (toDo.id === editedTodo.id) {
        return { ...editedTodo };
      } else {
        return toDo;
      }
    });*/
    //setTodoList(updatedToDos);
  };

  const mapToDos = (records) => {
    const list = records.map((record) => {
      let todo = { id: record.id, ...record.fields };
      if (!record.fields.isCompleted) {
        todo.isCompleted = false;
      }
      return todo;
    });
    setTodoList(list);
  };

  const fetchTodos = async () => {
    setIsLoading(true);
    const options = {
      method: 'GET',
      headers: { Authorization: token },
    };
    try {
      const resp = await fetch(url, options);
      if (!resp.ok) {
        throw new Error(resp.message);
      }
      let response = await resp.json();
      console.log(response);
      mapToDos(response.records);
    } catch (e) {
      console.log(e.message);
      setErrorMessage(e.message);
    } finally {
      console.log('in finally');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /*useEffect(() => {
    console.log('saving changed');
    fetchTodos();
  }, [isSaving]);*/

  const PromiseDemo = async () => {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    const options = {
      method: 'GET',
    };
    const resp = await fetch(pokemonURL, options);
    let response = await resp.json();

    console.log(response);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} isSaving={isSaving} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateToDo={updateToDo}
        isLoading={isLoading}
      />
      {errorMessage != '' ? (
        <div>
          <hr />
          <p>{errorMessage}</p>
          <button
            onClick={() => {
              setErrorMessage('');
            }}
          >
            Dismiss
          </button>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <button onClick={PromiseDemo}>Demo</button>
    </div>
  );
}

export default App;
