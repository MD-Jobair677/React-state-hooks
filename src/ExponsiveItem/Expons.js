import React, {useState} from 'react'
import './Expons.css'
import ExponsDate from './ExponsDate';

import Newexponse from './Newexponses/Newexpons';


function Expons(props){
    // akana props ar maddoma data recived kora hoba



    // akana suestate ba hooks ar maddoma onclik function use kora title poreborton kora hoba ata korarr jonno react ar modda useState funtion use korta hoba
    const [title,usertitle]=useState(props.title);
        const changeTitle =()=>{
            usertitle(newtitle);
        }

        // change valu whene user type valu
        const [newtitle,usenewtitle]=useState('');
         const changeinput=(event)=>{
          
            usenewtitle(event.target.value);

         }


    return(
        <div className='expons'>
            <h1>Lets Get Start</h1>
        <div>
            <Newexponse></Newexponse>
        </div>

            <div className='expons-item'>
              

            {/* use multicomponent  */}

                <ExponsDate

                date={props.date}

                ></ExponsDate>

                
                <div className='insurance'>
                       <h2>{title}</h2>
                        <div className='button'>${props.amount} </div>
                        {/* change input */}
                        <input type='text' value={newtitle} onChange={changeinput}/>
                        <button onClick={changeTitle}>Change title</button>
                </div>
            </div>
        </div>
    )
}

export default Expons;