import React from "react";
import { data } from "../../data/projectData";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const ProJectDetail = ({ projectId }) => {
  const { id } = useParams();
  const infoProject = data.find((items) => items.id === id);

  console.log(projectId, "is id from product detail");
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ margin: "15px" }} className="col-md-6">
        <Card.Img variant="top" src={infoProject.pic} />
        <Card.Body>
          <Card.Title>{infoProject.title}</Card.Title>
          <Card.Text>{infoProject.text}</Card.Text>
          <Link
            style={{
              color: "#fafafa",
              textDecoration: "none",
              padding: "15px",
            }}
            to={"/"}
          >
            <Button variant="primary">back to home page</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProJectDetail;
