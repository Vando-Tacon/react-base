import React from "react";
import './card.css'



const Card = ({children, color}) => {
    return (
      <div className='card' style={{ backgroundColor: color, textTransform: 'uppercase'}}  >
     {children}
      </div>
      
    )
  }

  
  Card.defaultProps = {
      color:'silver'
      
  }
  

  export default Card;