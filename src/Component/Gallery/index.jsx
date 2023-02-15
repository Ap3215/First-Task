import React from "react";

import "./index.css";

const Gallery = (props) => {
  return (
    <img className="gallery_image" src={props.src} alt="Images as props" />
  );
};

export default Gallery;
