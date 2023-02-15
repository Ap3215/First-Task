import React from "react";

import "./index.css";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;

  return (
    <div className="input_container">
      <input
        className="input_box"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
