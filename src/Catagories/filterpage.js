import React from 'react'

function FilterPage({filterItem}) {
  return (
   <>
    <div>FilterPage</div>
    <button className='btn btn-danger' onClick={()=>{filterItem('Chaprasi')}}>Chaprasi</button>
<button className='btn btn-danger' onClick={()=>{filterItem('all')}}>All</button>
   </>
  )
}

export default FilterPage