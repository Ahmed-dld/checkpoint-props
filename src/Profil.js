import React from 'react'
import PropTypes from 'prop-types'

const Profil = (props) => {
     //console.log(props)
    const txtc  = {
       
        color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      
    }
    
  
   
    return (
       
        <div>
            {props.handleAlert(props.FullName)}
            
        <h1 style= {txtc}> FullName: {props.FullName} </h1>
        <p style= {{backgroundColor: "lightblue"}}> {props.Bio}</p>
        <h3 style= {txtc}>Fonction: {props.Func}</h3>
        </div>
    )
}

Profil.defaultProps = {
    FullName: "Ahmed Daldoul"
}

Profil.propTypes = {
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Func: PropTypes.string,
    handleAlert: PropTypes.func
}


export default Profil