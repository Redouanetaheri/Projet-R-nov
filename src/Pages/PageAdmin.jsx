import React, { useContext, useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const PageAdmin = () => {
  
  return (
    <div style={{ backgroundColor: "#D4D6C9", minHeight: "100vh", padding: "2rem 0" }}>
    <Container className="mt-5">
    <h2 className="text-center mb-4">Bienvenue sur l’espace administrateur 👨‍💼</h2>

    <p className="text-center">
      Ici, vous pouvez gérer les utilisateurs, les prestations, les devis, et bien plus encore.
    </p>

    <Row className="mt-5">
      <Col md={4}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <Card.Title>👤 Utilisateurs</Card.Title>
            <Card.Text>Gérez les comptes utilisateurs, rôles et accès.</Card.Text>
            <Button variant="dark">Gérer</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <Card.Title>🛠️ Prestations</Card.Title>
            <Card.Text>Ajoutez, modifiez ou supprimez les prestations proposées.</Card.Text>
            <Button variant="dark">Modifier</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <Card.Title>📄 Devis</Card.Title>
            <Card.Text>Consultez les devis envoyés par les utilisateurs.</Card.Text>
            <Button variant="dark">Voir les devis</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  </div>
  );
};

export default PageAdmin;
