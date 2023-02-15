import React, { useState, useEffect } from "react";

import axios from "axios";

import Gallery from "../Gallery";

import "./index.css";

const Images = () => {
  const [images, setImages] = useState([]);

  const imageHandler = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=h2MclBzE6Mqf6V-R5uYQ0BD1GTNO6ZNCew3aqlDcTM8"
      )
      .then((res) => {
        // console.log(res);
        setImages(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    imageHandler();
  }, []);

  return (
    <div className="container grid">
      {images.map((image, index) => (
        <Gallery Key={index} src={image.urls.small} />
      ))}
    </div>
  );
};

export default Images;
