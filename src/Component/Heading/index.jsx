import React from "react";

import "./index.css";

const Heading = (props) => {
  return (
    <div className="heading_container">
      <h3 className="heading_title">{props.name}</h3>
    </div>
  );
};

export default Heading;
