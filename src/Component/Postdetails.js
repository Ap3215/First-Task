import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Postdetails = () => {
  // console.log(useParams());
  const [product, setProduct] = useState({});
  const id = useParams();

  useEffect(() => {
    fetchingPost();
  }, []);

  const fetchingPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        const newProduct = res.data.find((item) => item.id === parseInt(id));
        console.log(newProduct);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>hii i am prodcut details</div>
    </>
  );
};

export default Postdetails;
