import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "../App.css";
import UserServices from "../Services/UserServices";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupTel, setSignupTel] = useState("");
  const [error, setError] = useState("");
  const {setIsAuthenticated,setUser} = useContext(AuthContext);
  const navigate = useNavigate();

      
    const handleSubmit = async (e) => {
      console.log("test");
  
      e.preventDefault();
  
      try {
        console.log(signupLastName, signupFirstName, signupEmail, signupTel);
  
        const response = await UserServices.getSign({
          firstname: signupFirstName,
          lastname: signupLastName,
          email: signupEmail,
          password: signupPassword,
          phone: signupTel
        });
        toast.success("Connexion Réussie");
        console.log("test");
        // mettre la navigate vers profil
        navigate("/"); 
      } catch (error) {
        console.log(error);
        toast.error("Une erreur est survenue");
        console.log("test");
      }
    }; 
 
  const handleLogin = async (e) => {
   console.log('test');
   
    e.preventDefault();
    
    try {
    console.log(loginEmail, loginPassword);
    
        const response = await UserServices.getUsers({
          email: loginEmail,
          password: loginPassword})
        localStorage.setItem('token', response.data.token);
        toast.success("Connexion Réussie");
        console.log(response);
        setIsAuthenticated(true)
        setUser(AuthService.getUser())
      
       navigate ('/')
     } catch (error) {
        console.log(error);
        toast.error("Une erreur est survenue");
        
     }
  }


  return (
    <div className="login-page">
      <Container className="text-center py-5">
        <h1 className="mb-2">Connexion</h1>
        <p className="mb-4">
        Connectez-vous pour donner vie à vos projets de rénovation et transformer vos idées en réalité ! 🏠
        </p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Row className="justify-content-center align-items-center mt-5">
          <Col md={4} className="text-start">
            <h3 className="form-title">Connexion</h3>
            <Form className="login-form" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Entrez votre Mot de passe"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Connexion
              </Button>
            </Form>
          </Col>

          <Col md={1} className="text-center separator">
            <div className="vertical-line"></div>
          </Col>

          <Col md={4} className="text-start">
            <h3 className="form-title">Créer son compte</h3>
            <Form className="signup-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formSignupFirstName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  value={signupFirstName}
                  onChange={(e) => setSignupFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSignupLastName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre Prénom"
                  value={signupLastName}
                  onChange={(e) => setSignupLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSignupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSignupTel">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrez votre Numéro"
                  value={signupTel}
                  onChange={(e) => setSignupTel(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSignupPassword">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Entrez votre Mot de Passe"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="w-100">
                Inscription
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
