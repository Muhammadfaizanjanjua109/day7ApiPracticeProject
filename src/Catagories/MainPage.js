import React,{useState} from 'react'
import {Data} from './Data';
import MainNav from '../MainNav';
import Catagories from './Catagories';
import FilterPage from './filterpage';


function MainPage() {
    const [datas, setdatas] = useState(Data)
    const [Cata, setCata] = useState(Data);
    const filterdata = (catagory)=>{
      if (catagory==='all')
      {
        setdatas(Cata);
        return
      }

      const newdata=  datas.filter((fazi)=>fazi.catagory === catagory)
      setdatas(newdata);
    }
  return (
  <>
   <MainNav/>
   <FilterPage filterItem={filterdata}/>

   <div className='container-fluid'>
    <div className='row'>
      {datas.map((da)=>{
        return<>
        <div className='col-4 mx-auto'>
        <Catagories {...da}/>  
        </div>
       
        </>
      })}
</div>
   </div>
  </>
  )
}

export default MainPage