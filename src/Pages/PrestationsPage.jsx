import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PrestaService from "../Services/PrestaService";
import PrestaCards from "../Component/PrestaCards";

const PrestationsPage = () => {
 
  const [Elec, setElec] = useState([]);
  const [Enduit, setEnduit] = useState([]);
  const [Peinture, setPeinture] = useState([]);
  const navigate = useNavigate();

   
  const fetchElec = async (service_id) => {
    try {
      const response = await PrestaService.getServiceById(service_id);
      console.log(
        response.data
      );
      setElec(response.data);
    } catch (error) {
      console.log(
        "Erreur lors de la récupération des services pour les prestations",
        service_id,
        error
      );
    }
  };
  const fetchEnduit = async (service_id) => {
    try {
      const response = await PrestaService.getServiceById(service_id);
      console.log(
        response.data
      );
      setEnduit(response.data);
    } catch (error) {
      console.log(
        "Erreur lors de la récupération des services pour les prestations",
        service_id,
        error
      );
    }
  };
  const fetchPeinture = async (service_id) => {
    try {
      const response = await PrestaService.getServiceById(service_id);
      console.log(
        response.data
      );
      setPeinture(response.data);
    } catch (error) {
      console.log(
        "Erreur lors de la récupération des services pour les prestations",
        service_id,
        error
      );
    }
  };

  useEffect(() => {
    fetchElec(1);
    fetchEnduit(3);
    fetchPeinture(4);
  }, []);
  
    return <>

<div className="slider-container">
  
   <PrestaCards key={Elec.service_id} services={Elec} />
   <PrestaCards key={Enduit.service_id} services={Enduit} />
   <PrestaCards key={Peinture.service_id} services={Peinture} />
   
</div>

    </>;
}
 
export default PrestationsPage;