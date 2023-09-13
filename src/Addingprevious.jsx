import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Addingprevious=(props)=>{
  
    return (
        <>
        <div className='childrens'>
         <DeleteForeverIcon  className='deleteIcon' 
            onClick={()=>{
                props.onSelect(props.id)
            }}
            /><br />
        <div> <p>{props.text} </p>
       
        </div>
        </div>
        </>
    )
}
export default Addingprevious;