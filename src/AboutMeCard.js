import React from 'react'
import { Card } from 'react-bootstrap'
import CardData from './CardData'
function AboutMeCard() {

    
  return (
   <>
  <div className='row'>
<div className='col-4'></div>
<div className='col-4'>
    
<Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</div>
<div className='col-4'></div>

  </div>
   </>
  )
}

export default AboutMeCard