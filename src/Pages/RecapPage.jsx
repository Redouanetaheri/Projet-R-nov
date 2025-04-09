import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";


const RecapPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { typeTravaux, valeur, photos } = location.state || {};
  
    const tarifs = {
      électricité: 50, // l'heure
      peinture: 20, // /m²
      enduit: 25, // /m²
    };
  
    const estimation = valeur * (tarifs[typeTravaux] || 0);
    const acompte = estimation * 0.5;
  

  return <>
    <div className="container-form">
      <h2>Récapitulatif de votre devis</h2>
      <Card className="p-4">
        <p><strong>Type de travaux :</strong> {typeTravaux}</p>
        <p><strong>Surface ou durée :</strong> {valeur} {typeTravaux === "électricité" ? "heures" : "m²"}</p>
        <p><strong>Nombre de photos :</strong> {photos?.length || 0}</p>
        <p><strong>Estimation :</strong> {estimation} €</p>
        <p><strong>Acompte (50%) :</strong> {acompte.toFixed(2)} €</p>
       
        

        <Button
          variant="success"
          className="mt-3"
          onClick={() => navigate("/Reservation", { state: { estimation } })}
        >
          Réserver un créneau
        </Button>
      </Card>
    </div>
    </>
}


export default RecapPage;