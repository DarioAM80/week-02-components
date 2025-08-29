import React from 'react';

function TextInputWithLabel(props) {
  const { elementId, ref, labelText, value, onChange } = props;
  return (
    <React.Fragment>
      <label htmlFor={elementId}>{labelText}</label>
      <input
        id={elementId}
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
}

export default TextInputWithLabel;
