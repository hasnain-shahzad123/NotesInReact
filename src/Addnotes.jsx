import React, { useState } from 'react'
import Addingprevious from './Addingprevious';

const Addnotes=()=>{
    let [newv,setnew]=useState('');
    let [note,setNote]=useState([]);

const eventChanged=(event)=>{
    //console.log(event.target.value);\
    setnew(event.target.value);
}
const ButtonClicked=()=>{
    console.log(note)
    setNote((oldValues)=>{
        return([
            ...oldValues,newv
        ])
    })
    setnew('');
}
const deleteFun=(id)=>{
    setNote((oldValues)=>{
     return  oldValues.filter((val,index)=>{
        return index!=id;
        })
    })
}
    return (
        <>
        <div className='writeNote'> 
        <textarea className='enterText' placeholder='Write Text here' onChange={eventChanged}
            value={newv}
        />
        <button className='plusSign' onClick={ButtonClicked} >+</button>
        </div>
        <div className='Tnotes'>
        {note.map((element,index)=>{
        return <><Addingprevious text={element} key={index} id={index}
            onSelect={deleteFun}
        />
        </>
        })}
        </div>
        </>
    )
}
export default Addnotes;
