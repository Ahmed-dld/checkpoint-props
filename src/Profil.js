import React from 'react'
import PropTypes from 'prop-types'

const Profil = (props) => {
    //console.log(props)
    return (
        <div>
            {props.handleAlert(props.FullName)}
            
        <h1> FullName: {props.FullName} </h1>
        <p> {props.Bio}</p>
        <h3>Fonction: {props.Func}</h3>
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