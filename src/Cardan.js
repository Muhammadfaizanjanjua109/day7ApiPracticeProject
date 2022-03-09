import React from 'react'
import {Card} from 'react-bootstrap';
import {CardGroup} from 'react-bootstrap';
function Cardan({brand,name,image_link,description,price}) {
  
  return (

<>

<div className='container-fluid'>
    <div className='m-5'>
  
    <CardGroup>
    <Card>
      <Card.Img variant="top" src={image_link} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{price}</small>
      </Card.Footer>
    </Card>
    </CardGroup>
        </div>

    </div>
 
 
</>
  )
}

export default Cardan