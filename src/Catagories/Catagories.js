import React from 'react'
import { Card } from 'react-bootstrap';
function Catagories({id,name,catagory,section}) {
  return (

   
      
      <Card  style={{ width: '18rem' }}>
   <Card.Body>
     <Card.Title>{name}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">{catagory}</Card.Subtitle>
     <Card.Text>
     <h3>{section}</h3>
     </Card.Text>
     <Card.Link >{id}</Card.Link>
   </Card.Body>
 </Card>

  )
}

export default Catagories