import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Cards from "../Card";

import "./index.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  const postDataHandler = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    postDataHandler(id);
  }, [id]);

  return (
    <div className="card_container">
      <Cards
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
      />
    </div>
  );
};

export default PostDetails;
