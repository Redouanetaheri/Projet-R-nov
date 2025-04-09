// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


 
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap';


const PrestaCards = ({ services }) => {
const navigate = useNavigate();

  const navigateTo = (service_id) => {
    navigate("/services/"+service_id);
  }
  
  console.log(services)
  return <>
   
      <Card className="presta-card" onClick={() => {navigateTo(services.service_id)}}>
        <Card.Img 
          className="card-img"
          variant="top" 
          src={`http://127.0.0.1:3000/services/image/${services.image_url}`}  
        />
          <Card.Body>
            <Card.Title style={{ color: "blue", fontSize: "20px" }}>
              {services.name || "Nom de la prestation"}
            </Card.Title>
            <Card.Text style={{ color: "black", fontSize: "18px" }}>
              {services.price_range || "0 ���"}
            </Card.Text>
        <Card.Text style={{ color: "black", fontSize: "18px" }}>
          {services.description || "Aucune description"}
        </Card.Text>
      </Card.Body>
      </Card>
   
       </>
};


export default PrestaCards;