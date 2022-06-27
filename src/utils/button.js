import React from 'react'
import './button.css'

const Button= ({ msj, onClick }) => {

    return (

        
            <button className="button" type="submit" onClick={onClick}> {msj} </button>
       

    )

};

export default Button;