import React from 'react'
import image from './photoProfil.jpg';

const ChildComponent = (props) => {
    //console.log(props)
    return (
        <div>
           
           <img src={image} alt=""/>  
        <h1>  {props.IMG} </h1>
       
        </div>
    )
}
export default ChildComponent