import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


 
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
// import React, { Component } from "react";


// const BookCard = ({ livre }) => {
// const navigate = useNavigate();

//   const navigateTo = (id_livre) => {
//     navigate("/livre/"+id_livre);
//   }
  
//   return <Card style={{ width: '13.5vw' }} onClick={() => {navigateTo(livre.id_livre)}}>
//         <Card.Img 
//         style={{ height: '300px'}}
//           className='card-img' 
//           variant="top" 
//           src={`http://127.0.0.1:3000/livre/image/${livre.image_url}`}  
//         />
//       </Card>
// };

// export default BookCard;
function Cards() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
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
  );
}

export default Cards;