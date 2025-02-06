import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
// import DetailsPage from '../Pages/DetailsPage';



const PrestationsPage = () => {
    const navigate = useNavigate();
    
//   const navigateTo = (id_livre) => {
//     navigate("/livre/"+id_livre);}

    return <>
    <div className="bodyContainer">
   
    <h1>Prestations</h1>

    <div className='EscapeCard'>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Electricité</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>

    </>;
}
 
export default PrestationsPage;