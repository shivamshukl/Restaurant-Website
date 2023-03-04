import React from 'react'
import './rst.css'

const Menucard = ({data}) => {
    
    
    
  return(
        <>
       <section className="main-card--cointainer" >
        {data.map((element)=>{
            return(
                <>
               <div className="card-container" >
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{element.id}</span>
                    <span className="card-author subtle"> {element.category}</span>
                    <h2 className="card-title"> {element.name} </h2>
                    <span className="card-description subtle">
                      {element.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={element.image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
                </div>
                
                
                
              
        </>
        
            )
        })}
        </section>
        
    
</>
        )

  
}

export default Menucard
