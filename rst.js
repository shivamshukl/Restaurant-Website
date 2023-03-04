import React, { useState } from 'react'
import Menucard from './menucard'
import Menu from './menuapi'
import Nav from './nav'

const ulist=[
  ...new Set(Menu.map((element)=>{
    return element.category;
  }))
]
const Rst = () => {
    const[data,setdata]=useState(Menu);
    //const[xulist,xsetulist]=useState(ulist);
    const filter=(category)=>{
      if(category=='All'){
     setdata(Menu);
        return;
      }
            let ul=Menu.filter((element)=>{
            return element.category===category;
         })
        setdata(ul);
    }
   return (
    <>
    <Nav filter={filter} ulist={ulist}/>
    <Menucard data={data}/>
    </>
    
  )
}

export default Rst
