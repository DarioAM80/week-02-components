function TodoListItem({ todo, onCompleteTodo }) {
  return (
    <li key={todo.id}>
      <form>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            onCompleteTodo(todo.id);
          }}
        />
        {todo.title}
      </form>
    </li>
  );
}

export default TodoListItem;
