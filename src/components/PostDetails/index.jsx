import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Card from "react-bootstrap/Card";
import "./index.css";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    const getPostDataHandler = async (id) => {
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );

            setPost(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getPostDataHandler(id);
    }, [id]);

    return (
        <div className="post-details">
            <Card className="post-details__card">
                <Card.Body>
                    <Card.Title>user_id: {post?.userId}</Card.Title>
                    <Card.Title>id: {post?.id}</Card.Title>
                    <Card.Title>title: {post?.title}</Card.Title>
                    <Card.Text>body: {post?.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PostDetails;
