import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserServices from '../Services/UserServices'
import { jwtDecode } from "jwt-decode";
import "../App.css";
import { Card } from "react-bootstrap";

const PageProfil = () => {
    const { id } = useParams();
    const [Users, setUsers] = useState([]);
    const token = localStorage.getItem("token");
    const prenom = token ? jwtDecode(token).lastname : null;
    const nom = token ? jwtDecode(token).firstname : null;
    const email = token ? jwtDecode(token).email : null;
    const telephone = token ? jwtDecode(token).phone : null;
    const fetchUsersById = async () => {
      try {
        const response = await UserServices.getUsersById(id);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchUsersById();
    }, []);
  
    console.log(Users);

    return <>
    <div className="bodyContainer">
<div className="d-flex justify-content-center  mb-2 "> 
 {[
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '35rem' }}
          className="d-flex justify-content-center  mt-5 mb-2"
        >
          <Card.Header>Informations personnelles</Card.Header>
          <Card.Body>
            
            <Card.Text>
            {nom && <h3>Nom: <span>{nom}</span></h3>}
               {prenom && <h3>Prénom: <span>{prenom}</span></h3>}
               {email && <h3>Email: <span>{email}</span></h3>}
               {telephone && <h3>Téléphone: <span>{telephone}</span></h3>}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
</div>
</div>
    </>;
}
 
export default PageProfil;