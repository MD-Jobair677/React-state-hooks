import React, {useState} from 'react'
import './Expons.css'
import ExponsDate from './ExponsDate';

function Expons(props){
    // akana props ar maddoma data recived kora hoba



    // akana suestate ba hooks ar maddoma onclik function use kora title poreborton kora hoba ata korarr jonno react ar modda useState funtion use korta hoba
    const [title,usertitle]=useState(props.title);
        const changeTitle =()=>{
            usertitle('tution fee')


        }



    return(
        <div className='expons'>
            <h1>Lets Get Start</h1>
            <div className='expons-item'>
              

            {/* use multicomponent  */}

                <ExponsDate

                date={props.date}

                ></ExponsDate>

                
                <div className='insurance'>
                       <h2>{title}</h2>
                        <div className='button'>${props.amount} </div>
                        <button onClick={changeTitle}>Change title</button>
                </div>
            </div>
        </div>
    )
}

export default Expons;