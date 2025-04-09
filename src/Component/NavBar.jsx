import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import AuthService from '../Services/AuthService';
import AuthContext from '../Context/AuthContext';

const NavBar = () => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Décoder le token pour récupérer les informations
  
  const lastname = token ? jwtDecode(token).lastname : null;
  const role = token ? jwtDecode(token).role : null; 

  // Fonction pour se déconnecter
  const handleLogout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav'>
      <Navbar.Brand as={Link} to="/">
          <img
            src="src\assets\logo-png.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span className="ms-2 fw-bold">MonProjetRénov</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  className="nav-link" to="/Apropos">A Propos</Link>
            <Link className="nav-link" to="/Prestations">Prestations</Link>
            <Link className="nav-link"to="/Contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        {!isAuthenticated ? <> 
        
        <Button className="button" variant="outline-dark" style={{ marginRight: '0px' }} onClick={() => navigate('/Login')}>Connectez-vous</Button>
        </> : <Button className="button" variant="outline-dark" style={{ marginRight: '0px' }} onClick={handleLogout}>Deconnexion</Button>
}
        <Nav >
        {lastname && <Link className="nav-link" to="/PageProfil">Profil de {lastname}</Link>}
            {role == "admin" && (<Link className="nav-link" to="/PageAdmin">Admin</Link>)}
       </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
