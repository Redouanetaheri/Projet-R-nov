import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserServices from '../Services/UserServices';
import { jwtDecode } from "jwt-decode";
import "../App.css";
import { Card, Button, Form } from "react-bootstrap";

const PageProfil = () => {
    const { id } = useParams();
    const [Users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false); 
    const [updatedUser, setUpdatedUser] = useState({
        lastname: "",
        firstname: "",
        email: "",
        phone: "",
    });

    const token = localStorage.getItem("token");
    const prenom = token ? jwtDecode(token).lastname : null;
    const nom = token ? jwtDecode(token).firstname : null;
    const email = token ? jwtDecode(token).email : null;
    const telephone = token ? jwtDecode(token).phone : null;

    const fetchUsersById = async () => {
        try {
            const response = await UserServices.getUsersById(id);
            setUsers(response.data);
            setUpdatedUser(response.data); 
        } catch (error) {
            console.log(error);
        }
    };

    
    const handleChange = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            await UserServices.getUptade(id, updatedUser);
            setIsEditing(false);
            fetchUsersById(); 
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

useEffect(() => {
     if (id) {
            fetchUsersById(); 
        }
    }, [id]);

    return (
        <div className="page-profil">
            <Card
                bg="white"
                text="dark"
                style={{ width: '35rem' }}
                className="d-flex justify-content-center mt-5 mb-2"
            >
                <Card.Header>Informations personnelles</Card.Header>
                <Card.Body>
                    {isEditing ? (
                        
                        <Form>
                            <Form.Group>
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={updatedUser.lastname}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    value={updatedUser.firstname}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={updatedUser.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Téléphone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={updatedUser.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="success" className="mt-3" onClick={handleUpdate}>
                                Enregistrer
                            </Button>
                            <Button variant="secondary" className="mt-3 ms-2" onClick={() => setIsEditing(false)}>
                                Annuler
                            </Button>
                        </Form>
                    ) : (
                        
                        <>
                            <div>
  <p><strong>Nom:</strong> {nom}</p>
  <p><strong>Prénom:</strong> {prenom}</p>
  <p><strong>Email:</strong> {email}</p>
  <p><strong>Téléphone:</strong> {telephone}</p>
</div>



    <Button variant="primary" onClick={() => setIsEditing(true)}>Modifier</Button>
    <Button variant="danger" > Supprimer</Button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};
 
export default PageProfil;