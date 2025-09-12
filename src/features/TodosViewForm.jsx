import React, { useEffect, useState } from 'react';
const TodosViewForm = ({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) => {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log('inside timeout)');
      console.log(localQueryString);
      setQueryString(localQueryString);
    }, 500);

    return () => {
      console.log('in return ', debounce);
      clearTimeout(debounce);
    };
  }, [localQueryString, setLocalQueryString]);

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
            value={localQueryString}
            onChange={(event) => {
              setLocalQueryString(event.target.value);
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              setLocalQueryString('');
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
