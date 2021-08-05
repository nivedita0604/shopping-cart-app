import React from 'react';
import { InputGroup } from 'react-bootstrap';

const Filter = ({ id, name, checked, onChange, label }) => {
  return (
    <div>
      <InputGroup>
        <InputGroup.Radio
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </InputGroup>
    </div>
  );
};

export default Filter;
