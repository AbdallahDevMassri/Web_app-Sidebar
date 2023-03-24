import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./style.css";

export const CommentComponent = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [liked, setLiked] = useState(false); // Add a new state variable to track whether the user has liked the comment
  const [disliked, setDisliked] = useState(false); // Add a new state variable to track whether the user has disliked the comment

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name: name,
      comment: comment,
      likes: 0, // Initialize the likes property to zero
      dislikes: 0, // Initialize the dislikes property to zero
      id: comments.length + 1,
    };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
    setLiked(false);
    setDisliked(false);
  };

  const handleLike = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            likes: !liked ? comment.likes + 1 : comment.likes - 1,
            dislikes: disliked ? comment.dislikes - 1 : comment.dislikes,
          }
        : comment
    );
    setComments(updatedComments);
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = (id) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            dislikes: !disliked ? comment.dislikes + 1 : comment.dislikes - 1,
            likes: liked ? comment.likes - 1 : comment.likes,
          }
        : comment
    );
    setComments(updatedComments);
    setDisliked(!disliked);
    setLiked(false);
  };

  const commentList = comments.map((comment) => {
    return (
      <div key={comment.id} className="comment">
        <div className="name">{comment.name}</div>
        <div className="text">{comment.comment}</div>
        <div className="rating">
          <div className="like-container">
            <div className="like-badge" onClick={() => handleLike(comment.id)}>
              <FaThumbsUp />
              <div className="like-count">{comment.likes}</div>
            </div>
          </div>
          <div className="dislike-container">
            <div
              className="dislike-badge"
              onClick={() => handleDislike(comment.id)}
            >
              <FaThumbsDown />
              <div className="dislike-count">{comment.dislikes}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your comment"
                rows={3}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>{commentList}</Col>
      </Row>
    </Container>
  );
};

export default CommentComponent;
