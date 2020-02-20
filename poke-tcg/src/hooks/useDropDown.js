import React, { useState } from "react";

export const useDropdown = (label, options, defaultState) => {
  const [state, setState] = useState(defaultState);
  const id = `dropdown-${label.replace(" ", "").toLowerCase()}`;
  const dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          name={id}
          onChange={(event) => setState(event.target.value)}
          onBlur={(event) => setState(event.target.value)}
          disabled={!options.length}
        >
          <option>All</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, dropdown, setState];
};
