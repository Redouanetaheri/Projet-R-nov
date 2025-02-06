import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
const PageAdmin = () => {
  const { user } = useContext(AuthContext);  
  const [file, setFile] = useState(null);
  const [titre, setTitre] = useState('');
  const [auteur, setAuteur] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [categorie, setCategorie] = useState('');
  const [categories, setCategories] = useState([]);  
  const [livres, setLivres] = useState([]);
  const [choixLivre, setChoixLivre] = useState('');

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/livre/idcategorie');
      setCategories(response.data);  
    } catch (error) {
      console.error('Erreur de récupération des catégories', error);
    }
  };

  const fetchLivres = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/livre/AllBook');
      setLivres(response.data); 
    } catch (error) {
      console.error('Erreur de récupération des livres', error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchLivres();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", "test");
    formData.append("titre", titre);
    formData.append("auteur", auteur);
    formData.append("prix", prix);
    formData.append("description", description);
    formData.append("id_categorie", categorie);

    try {
    await axios.post("http://127.0.0.1:3000/livre/addBook", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
      }
    });
    toast.success('Produit ajouté avec succès');
  } catch (error) {
    console.error(error);
    toast.error('Erreur lors de l\'ajout du produit');
  }
};
   

  const handleDeleteLivre = async () => {
    try {
      await axios.delete(`http://127.0.0.1:3000/livre/deleteLivre/${choixLivre}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success('Livre supprimé avec succès');
      fetchLivres(); 
    } catch (error) {
      console.error('Erreur lors de la suppression du livre', error);
      toast.error('Erreur lors de la suppression du livre');
    }
  };

  return (
    <div className="bodyContainer">
      <div className="profil-header">
        <h1>Bienvenue {user.lastname}</h1>
      </div>

      <h2 className="title-favoris">Ajout d'un nouveau Livre</h2>
      <div className="favorites-section">
        <Form onSubmit={handleSubmit}>
          <h3>Titre</h3>
          <Form.Group className="mb-3" controlId="titreProduit">
            <Form.Control
              type="text"
              value={titre}
              onChange={(e) => setTitre(e.target.value)} 
            />
          </Form.Group>

          <h3>Auteur</h3>
          <Form.Group className="mb-3" controlId="auteurProduit">
            <Form.Control
              type="text"
              value={auteur}
              onChange={(e) => setAuteur(e.target.value)}  
            />
          </Form.Group>

          <h3>Prix</h3>
          <Form.Group className="mb-3" controlId="prixProduit">
            <Form.Control
              type="number"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}  
            />
          </Form.Group>

          <h3>Catégorie</h3>
          <Form.Group className="mb-3" controlId="categorieProduit">
            <Form.Control
              as="select"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}  
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map((cat) => (
                <option key={cat.id_categorie} value={cat.id_categorie}>
                  {cat.libelle} 
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <h3>Image du produit</h3>
          <Form.Group className="mb-3" controlId="imageProduit">
            <Form.Control
              type="file"
             name="file"
             onChange={(e) => {setFile(e.target.files[0])}} />
            
          </Form.Group>

          <h3>Description</h3>
          <Form.Group className="mb-3" controlId="descriptionProduit">
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}  
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Ajouter le produit
          </Button>
            <ToastContainer />
        </Form>
        <h1>______________________________________</h1>
        <h2 className="title-favoris">Supprimer un livre</h2>
        <Form>
          <h3>Sélectionner un livre à supprimer</h3>
          <Form.Group className="mb-3" controlId="selectLivre">
            <Form.Control
              as="select"
              value={choixLivre}
              onChange={(e) => setChoixLivre(e.target.value)}
            >
              <option value="">Choisir un livre</option>
              {livres.map((livre) => (
                <option key={livre.id_livre} value={livre.id_livre}>
                  {livre.titre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button variant="danger" onClick={handleDeleteLivre}>
            Supprimer le livre
          </Button>
            <ToastContainer />

        </Form>
        <h1>______________________________________</h1>
        <h2 className="title-favoris">Modification d'un livre</h2>
       <Form>

       </Form>
      </div>
    </div>
  );
};

export default PageAdmin;
