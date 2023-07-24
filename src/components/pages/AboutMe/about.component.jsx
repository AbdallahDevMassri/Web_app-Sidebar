import React from "react";
import { Modal, Button } from "react-bootstrap";

import "./style.css";

export const AboutComponent = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="aboutMe-container">
      <h1 className="header">About Me</h1>
      <div className="about-content">
        <p className="lead">
          My Name is Abdallah Massri & I am a{" "}
          <strong>Fullstack Developer</strong>
        </p>
        <p>This is a simple resposive web </p>

        <Button variant="primary" onClick={handleShow}>
          More About
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} className="about-modal">
        <Modal.Header closeButton>
          <Modal.Title>More About me </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum purus sit amet dignissim gravida. Etiam laoreet, justo et
            ultricies faucibus, felis nisi commodo mauris, eget fermentum mauris
            nibh in lorem. Fusce commodo ante ac velit tincidunt blandit. Nullam
            malesuada arcu vel sapien ultricies, sed accumsan elit ultrices.
          </p>
          <p>
            Aliquam faucibus nisl quis urna vestibulum, sit amet malesuada justo
            vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Aliquam auctor leo non libero
            aliquam, eget semper lectus efficitur. Donec ut odio eu velit
            hendrerit finibus in nec nibh.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
