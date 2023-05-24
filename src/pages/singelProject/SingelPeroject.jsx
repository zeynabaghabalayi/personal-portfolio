import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./singel.css";
import { Link } from "react-router-dom";

const SingelPeroject = ({ title, text, pic, id }) => {
  return (
    <div className="col-md-6">
      <Card style={{ margin: "15px" }} data-aos="fade-up">
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>

          <Link
            style={{
              color: "#fafafa",
              textDecoration: "none",
              padding: "15px",
            }}
            to={`/detail/${id}`}
          >
            <Button>more detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingelPeroject;
