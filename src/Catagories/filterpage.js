import React from 'react'

function FilterPage({filterItem,catagory}) {
  return (
   <>
    <div>FilterPage</div>
{catagory[0].map((cat)=>{
  return   <button className='btn btn-info' onClick={()=>{filterItem(cat)}}>{cat}</button>
})}

   </>
  )
}

export default FilterPage