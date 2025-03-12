import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';


const AproposPage = () => {
    return <>
    <div style={{ backgroundColor: '#D4D6C9', minHeight: '100vh', padding: '50px 0' }}>
   <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="fw-bold">Qui Sommes-Nous ?</h1>
          <p className="text-muted">Découvrez notre vision, nos valeurs et notre engagement.</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src="src\assets\istockphoto-1384317531-612x612.jpg" fluid rounded />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold">Notre Mission</h2>
          <p>
            Chez <strong>MonProjetRénov</strong>, nous avons pour objectif de révolutionner la gestion des travaux de rénovation.
            Nous offrons une plateforme intuitive et transparente qui permet aux particuliers d’organiser leurs projets
            en toute simplicité, de l’estimation à la réalisation.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="fw-bold text-center">Nos Valeurs</h2>
        </Col>
      </Row>
      
      <Row className="text-center">
        <Col md={4}>
          <Card className="Apropos-card shadow-sm p-3">
            <Card.Body>
              <h3>Transparence</h3>
              <p>Nous mettons un point d'honneur à offrir une totale transparence sur les coûts et les services proposés.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="Apropos-card shadow-sm p-3">
            <Card.Body>
              <h3>Innovation</h3>
              <p>Nous développons des outils digitaux performants pour simplifier la gestion des projets de rénovation.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="Apropos-card shadow-sm p-3">
            <Card.Body>
              <h3>Fiabilité</h3>
              <p>Nous sélectionnons des artisans qualifiés et nous nous engageons sur la qualité des prestations.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mt-5">
        <Col>
          <h2 className="fw-bold">Notre Équipe</h2>
          <p>Une équipe passionnée et engagée pour vous accompagner à chaque étape de votre projet.</p>
        </Col>
      </Row>
    </Container>
    </div>
    </>;
}
 
export default AproposPage;