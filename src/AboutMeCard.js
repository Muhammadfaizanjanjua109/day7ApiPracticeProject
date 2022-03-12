import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import {CardData} from './CardData'
function AboutMeCard() {
const [index, setIndex] = useState(2);
const [carddatas,handlecarddata] = useState(CardData)
const {id,name,review}=carddatas[index];
const HandleNext=()=>{
    setIndex((numberhn)=>{
        let  newNumber=numberhn+1;
        return checkNumber(newNumber);
     })
}
const HandlePrevious=()=>{
    setIndex((numbersa)=>{
        let  number=numbersa-1;
        return checkNumber(number)
      
     })
}
const checkNumber=(number)=>{
if (number>carddatas.length-1)
{
    return 0;
}
if (number<0)
{
    return carddatas.length-1;
    
}
console.log(carddatas.length-1);
return number;
}
  return (
   <>
  <div className='row'>
<div className='col-4'></div>
<div className='col-4'>
    
<Card>
  <Card.Header>{name}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
      {review}.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">{name} {id}</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<button onClick={()=>HandleNext()}>Next</button>
<button onClick={()=>HandlePrevious()}>Pervious</button>
</div>
<div className='col-4'></div>

  </div>
   </>
  )
}

export default AboutMeCard