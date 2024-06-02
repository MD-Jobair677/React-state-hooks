import React from 'react'
import './Expons.css';

function ExponsDate(props){
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
   
    let month = props.date.toLocaleString('en-US',{month: 'long'});
    let year = props.date.getFullYear();


    return(

        <div>
               <div>
                    <h1>{day}</h1>
                </div>
                <div>
                    <h1>{month}</h1>
                </div>
                <div>
                    <h1>{year}</h1>
                </div>
               </div>

    )
}

export default ExponsDate;