import React from 'react'
import Cardan from './Cardan';
import {CardGroup} from 'react-bootstrap';
function Api1({...ds}) {
  return (
    <div className='row'>

    {ds.map((dsa)=>{
       
          return(<>
           <div className='col-lg-4 col-md-4 col-sm-12'>
          <Cardan key={dsa.id} {...dsa}/>
          </div>
    </>)})}
    
    
    </div>
  )
}

export default Api1