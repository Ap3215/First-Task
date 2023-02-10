import axios from "axios";
import React, { useState, useEffect } from "react";

const Imgpage = () => {
  const [img, setImg] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=h2MclBzE6Mqf6V-R5uYQ0BD1GTNO6ZNCew3aqlDcTM8"
      )
      .then((res) => {
        console.log(res);
        setImg(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container grid">
        {img.map((value, index) => {
          return (
            <div key={index} className="images">
              <img src={value.urls.small} alt="images that show pages" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Imgpage;
