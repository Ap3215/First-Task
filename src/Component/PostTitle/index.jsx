import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const PostTitle = (props) => {
  const { to, title } = props;
  return (
    <li className="poststitle_list">
      <Link className="poststitle_link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default PostTitle;
