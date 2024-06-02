import React from 'react'
import './Card.css'

const Card =(props)=>{

    // children ar class gulo nita hola 
    const classess = 'card'+props.className

    return(

        
       <div className={classess} >
        <h1>hello</h1>
        {props.children}
       </div>

    )
}

export default Card;