
import React, {useState} from 'react'


 import './Formexponse.css'

 const Formexponse=()=>{
    const [title,newtitle] = useState('');
    const [amount,newamount] = useState('');
    const [newdate,setdate] = useState('');
    const changetitle=(event)=>{
        newtitle(event.target.value)
    }
    const amounttitle=(event)=>{
        newamount(event.target.value)

    }
    const date=(event)=>{
        setdate(event.target.value)

    }

    const submitform=(event)=>{
        event.preventDefault()

        const newexponsvalue = {
            title:title,
            amount:amount,
            newdate:newdate,
        }

        console.log(newexponsvalue);

    }

    return (
        <div>
           <form onSubmit={submitform}>
           <div>
            <label>Title</label>
            <input type="text" value={title} onChange={changetitle}  />

            </div>
            <div>
            <label>amount</label>
            <input type="text" value={amount}  onChange={amounttitle} />
            </div>
            <div>
            <label>Date</label>
            <input type="date" value={newdate} onChange={date}  />
            </div>
            <input type="submit" value='submit'/>
           </form>
        </div>
    )
 }

 export default Formexponse