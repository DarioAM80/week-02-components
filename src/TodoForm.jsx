function TodoForm() {
  return (
    <form>
      {/* is the ID of the label's associated control element.*/}
      <label htmlFor="todoTitle">Todo</label>
      <input id="todoTitle" type="text" />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
