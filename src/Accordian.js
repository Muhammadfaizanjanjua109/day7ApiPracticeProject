import React,{useState} from 'react'

function Accordian()
{
    const [Acc, setAccor] = useState(true)
  return (
   <>
   <div className='row'>
       <div className='col-4'></div>
       <div className='col-4'>
        <div>
            <button className='btn btn-info' onClick={()=>{setAccor(!Acc)}}>{Acc ? 'Collapse' : 'Expand'}</button>
            {Acc &&  <div className='Accodian- accordion-body bg-opacity-25 bg-dark'>
            <h1>Accordian is shown</h1>
 </div>}
           
        </div>   
        </div>
       <div className='col-4'></div>
   </div>
   </>
  )
}

export default Accordian