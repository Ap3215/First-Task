import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setposts] = useState([]);
  const [error, setError] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState("");

  // const inputEvent = (event) => {
  //   const e = event.target.value;
  //   console.log(e);
  //   setData(e);
  // };
  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setposts(res.data);
        setSearchApiData(res.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setposts(searchApiData);
    } else {
      const filResult = searchApiData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setposts(filResult);
    }
    setFilterVal(e.target.value);
  };

  return (
    <>
      <h2 className="heading">Api Title</h2>
      {error !== "" && <h3 className="heading">{error}</h3>}

      <div className="list-item">
        <input
          type="text"
          placeholder="Search"
          value={filterVal}
          onChange={(e) => handleFilter(e)}
        />

        {posts.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <Link to={`/post/${item.id}`}> {item.title}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
