import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Postdetails = () => {
  // console.log(useParams());
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchingPost();
  }, []);

  const fetchingPost = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res.data);
        const newProduct = res.data.find((item) => item.id === parseInt(id));
        setProduct(newProduct);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ margin: "4rem" }}>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title>user_id: {product.userId}</Card.Title>
            <Card.Title>id: {product.id}</Card.Title>
            <Card.Title>title: {product.title}</Card.Title>
            <Card.Text>body: {product.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Postdetails;
