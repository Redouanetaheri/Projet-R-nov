import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import CountUp from "../Component/CountUP";




const HomePage = () => {
  const navigate = useNavigate();
    return <>
    <div style={{ backgroundColor: "#D4D6C9", minHeight: "100vh", padding: "2rem 0" }}>
      {/* Section Accroche */}
      <Container className="text-center mb-5">
        <h1 className="mb-4">Simplifiez vos projets de rénovation</h1>
        <p>Obtenez un devis rapide et personnalisé en quelques clics.</p>
        <Button variant="success" size="lg" onClick={() => navigate('/Formulaire')}>Lancer mon devis</Button>
      </Container>

      {/* Section Chiffres Clés */}
      <Container className="text-center mb-5">
        <Row>
          <Col md={4}>
            <Card className="homepage-card p-4 shadow-lg">
            <CountUp
            from={0}
            to={50}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
            />
              <p>Projets réalisés</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="homepage-card p-4 shadow-lg">
            <CountUp 
            from={0}
            to={98}
            duration={1}
            suffix="%"
            className="count-up-text"
            />
              <p>Clients satisfaits</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="homepage-card p-4 shadow-lg">
            <CountUp 
            from={0}
            to={24}
            duration={1}
            suffix="h"
            className="count-up-text"
            />
              <p>Temps moyen d'estimation</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Carrousel Témoignages */}
      <Container>
        <Carousel>
          <Carousel.Item>
            <div className="text-center p-5">
            <img src="src\assets\AdobeStock_219424653-BD-1024x647.jpg" alt="photo client"  width="800"
            height="400" />
              <h5>"Un service incroyable, rapide et efficace !"</h5>
              <p>- Jean Dupont</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center p-5">
            <img src="src\assets\1252-62efd29f84e0e.jpeg" alt="photo client"
            width="800"
            height="400" />
              <h5>"J’ai pu gérer mon projet en toute sérénité !"</h5>
              <p>- Marie Durand</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="text-center p-5">
              <img src="src\assets\IMG04561jpg_5e68c0cf2f5ec.jpg" alt="Photo client"  width="800"
            height="400"/>
              <h5>"La transparence et la simplicité que j’attendais."</h5>
              <p>- Paul Lambert</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  
    </>;
}
 
export default HomePage;