import React from 'react';

const Filter = ({ id, name, checked, onCheckClick, label }) => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onCheckClick}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
};

export default Filter;
