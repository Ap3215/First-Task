import React, { useState, useEffect } from "react";

import axios from "axios";

import Heading from "../Heading";
import Input from "../Input";
import PostTitle from "../PostTitle";

import "./index.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const onInputChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  const postsHandler = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const postsFilterHandler = (posts, filter) => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    postsHandler();
  }, []);

  return (
    <>
      <Heading name={error ? "error" : "All Post"} />

      <div className="list-item">
        <Input
          type="text"
          value={filter}
          placeholder="Search"
          onChange={onInputChangeHandler}
        />
        <ul>
          {postsFilterHandler(posts, filter).map((item) => (
            <PostTitle
              key={item.id}
              to={`/posts/${item.id}`}
              title={item.title}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
