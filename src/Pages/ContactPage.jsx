import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
// import contactService from "../../services/contactService";
import "../App.css";


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const handleInputChange = ({ target: { name, value } }) => {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const { status } = await contactService.sendContact(formData);
    
          if (status === 200) {
            alert("Message envoyé avec succès");
            setFormData({ name: "", email: "", message: "" });
          } else {
            alert("Erreur lors de l'envoi du message");
          }
        } catch (error) {
          alert("Erreur de connexion au serveur");
        }
      };
    
    return <>
     <div className="contact-page">
      <Row>
        <Col>
          <h1 className="text-center">Contacts</h1>
          <p className="text-center">
          Une question ou un projet de rénovation en tête ? Plongez dans l'univers de la transformation et contactez-nous dès maintenant ! 🏡
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Card className="card-contact">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez votre nom"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Entrez votre email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                
                <Form.Group controlId="formObject" className="mt-3">
                  <Form.Label>Objet</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez l'objet"
                    name="Object"
                    value={formData.Object}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                
                <Form.Group controlId="formPhone" className="mt-3">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Entrez votre numéro"
                    name="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Entrez votre message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100 mt-3">
                                Envoyer
                              </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
    </>;
}
 
export default ContactPage;

