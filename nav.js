import React ,{useState}from 'react'
import Menu from './menuapi'

const Nav = ({filter,ulist}) => {
    return(
        <>
    
    <div className='navbar'>
    <div className='btn-group'>
    {ulist.map((element)=>{
  return(
    <>
    <button className='btn-group__item' onClick={()=>{filter(element)}}>{element}</button>
    
    </>
  )})}
    
             </div>
          </div>
    </>
        )}
  
    

  
    


export default Nav
