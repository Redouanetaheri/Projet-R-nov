import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";



const FormulairePage = () => {
  const [formData, setFormData] = useState({
    typeTravaux: "",
    valeur: 0,
    photos: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, photos: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Recap", { state: formData }); // L'envoie de données à la page suivante ici 
  };

    return <>

    <div className="container-form">
      <h2>Remplissez votre demande de devis</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="typeTravaux">
          <Form.Label>Type de travaux</Form.Label>
          <Form.Select name="typeTravaux" onChange={handleChange} required>
            <option value="">Sélectionner...</option>
            <option value="électricité">Électricité</option>
            <option value="peinture">Peinture</option>
            <option value="enduit">Enduit</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="valeur">
          <Form.Label>Surface en m² ou durée en heures</Form.Label>
          <Form.Control
            type="number"
            name="valeur"
            min="1"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="photos">
          <Form.Label>Ajouter des photos</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileUpload} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3" onClick={() => navigate('/Recap')}>
          Obtenir mon estimation
        </Button>
      </Form>
    </div>
    </>;
}
 
export default FormulairePage;