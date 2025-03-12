import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";



const FormulairePage = () => {
    const [typeTravaux, setTypeTravaux] = useState("");
  const [facturation, setFacturation] = useState("");

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setTypeTravaux(type);
    setFacturation(type === "électricité" ? "heures" : "m²");
  };

    return <>
    <div style={{ backgroundColor: "#D4D6C9", minHeight: "100vh", padding: "2rem 0" }}>
     <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center">Demande de Devis</h2>
      <Form>
        <Form.Group controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre nom" required />
        </Form.Group>
        
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Votre email" required />
        </Form.Group>
        
        <Form.Group controlId="telephone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="tel" placeholder="Votre numéro" required />
        </Form.Group>
        
        <Form.Group controlId="typeTravaux">
          <Form.Label>Type de travaux</Form.Label>
          <Form.Select value={typeTravaux} onChange={handleTypeChange} required>
            <option value="">Sélectionnez...</option>
            <option value="électricité">Électricité</option>
            <option value="enduit">Enduit</option>
            <option value="peinture">Peinture</option>
          </Form.Select>
        </Form.Group>
        
        {typeTravaux && (
          <Form.Group controlId="surfaceOuTemps">
            <Form.Label>Facturation en {facturation}</Form.Label>
            <Form.Control type="number" placeholder={`Entrez la valeur en ${facturation}`} required />
          </Form.Group>
        )}

        <Form.Group controlId="photos">
          <Form.Label>Ajouter des photos</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description du projet</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Décrivez votre projet" />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="mt-3 w-100">
          Envoyer la demande
        </Button>
      </Form>
    </Container>
    </div>
    </>;
}
 
export default FormulairePage;