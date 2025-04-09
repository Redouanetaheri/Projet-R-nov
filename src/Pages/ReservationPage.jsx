import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import StripeCheckout from "react-stripe-checkout";

const ReservationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { estimation } = location.state || {};
    const [date, setDate] = useState(new Date());
    const [paid, setPaid] = useState(false);

    // Calcul de l'acompte (50% du montant total)
    const acompte = estimation * 0.5;

    const handlePayment = (token) => {
        console.log("Paiement réussi :", token);
        setPaid(true);
    };

    return <>
        <div className="container-form">
            <h2>Réservation et Paiement</h2>
            <Card className="p-4 shadow-sm">
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Montant total du devis</td>
                            <td>{estimation.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td>Acompte (50% du total)</td>
                            <td>{acompte.toFixed(2)} €</td>
                        </tr>
                        <tr>
                            <td>Date sélectionnée</td>
                            <td>{date.toDateString()}</td>
                        </tr>
                    </tbody>
                </Table>

                <Form.Group className="mb-3">
                    <Form.Label>Choisissez une date :</Form.Label>
                    <Calendar onChange={setDate} value={date} />
                </Form.Group>

                {!paid ? (
                    <StripeCheckout
                        stripeKey="VOTRE_CLE_STRIPE_PUBLIC"
                        token={handlePayment}
                        amount={acompte * 100} 
                        currency="EUR"
                        name="Acompte de réservation"
                    >
                        <Button variant="success" className="mt-3">
                            Payer un acompte de {acompte.toFixed(2)} €
                        </Button>
                    </StripeCheckout>
                ) : (
                    <p className="text-success">✅ Paiement validé !</p>
                )}

                {paid && (
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={() => navigate("/")}
                    >
                        Retour à l'accueil
                    </Button>
                )}
            </Card>
        </div>
        </>
};

export default ReservationPage;
