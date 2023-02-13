import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./index.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState("");
    const [error, setError] = useState("");

    const onInputChangeHandler = (e) => {
        setFilter(e.target.value);
    };

    const fetchPostsHandler = async () => {
        try {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const filterPostHandler = (posts, filter) => {
        return posts.filter((post) =>
            post.title.toLowerCase().includes(filter.toLowerCase())
        );
    };

    useEffect(() => {
        fetchPostsHandler();
    }, []);

    return (
        <div className="posts">
            <h2 className="posts__heading">{error ? error : "All Posts"}</h2>

            <div className="posts__container">
                <input
                    type="text"
                    placeholder="Search"
                    value={filter}
                    className="posts__input"
                    onChange={onInputChangeHandler}
                />

                {filterPostHandler(posts, filter).map((item) => (
                    <ul className="posts-list" key={item.id}>
                        <li>
                            <Link
                                to={`/posts/${item.id}`}
                                className="posts-list__link"
                            >
                                {item.title}
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Posts;
