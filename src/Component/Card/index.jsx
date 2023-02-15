import React from "react";

import { Card } from "react-bootstrap";

import "./index.css";

const Cards = (props) => {
  const { userId, id, title, body } = props;
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>Userid: {userId}</Card.Title>
        <Card.Title>Id: {id}</Card.Title>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>Body: {body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
