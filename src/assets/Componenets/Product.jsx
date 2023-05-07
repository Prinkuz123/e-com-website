import React from "react";
import "./Style.css";
import { Productdetails } from "./Productdata";
import {  useNavigate } from "react-router-dom";

import { Card, Button } from "react-bootstrap";


const Product = () => {
  
  const navigate = useNavigate();
  
  
  return (
    <div>
   
      {Productdetails.map((item) => (
        <div className="d-inline-flex">
          <Card
            className="shadow p-3 m-4 bg-body-tertiary rounded"
            style={{ width: "14rem" }}
          >
            <Card.Img
              style={{ height: "15rem" }}
              className="p-2"
              variant="top"
              src={item.path}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Descrription about content</Card.Text>

              <Button variant="primary" onClick={ () => navigate(`/${item.name}`)}>
                View Product
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
