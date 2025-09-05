import React from 'react';
const TodosViewForm = ({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) => {
  const preventRefresh = (event) => {
    event.preventRefresh();
  };
  return (
    <React.Fragment>
      <form onSubmit={preventRefresh}>
        <div>
          <label>Search todos</label>
          <input
            type="text"
            value={queryString}
            onChange={(event) => {
              setQueryString(event.target.value);
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              setQueryString('');
            }}
          >
            Clear
          </button>
        </div>
        <div>
          <label>Sorty by</label>
          <select
            onChange={(event) => {
              setSortField(event.target.value);
            }}
            value={sortField}
          >
            <option value="title">Title</option>
            <option value="createdTime">Time added</option>
          </select>
          <label>Direction</label>
          <select
            value={sortDirection}
            onChange={(event) => {
              setSortDirection(event.target.value);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TodosViewForm;
