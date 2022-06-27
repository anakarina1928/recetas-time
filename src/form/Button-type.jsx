import React from 'react'
import './button-type.css'

const ButtonTypeTheEat= ({ msj, value }) => {

    return (

        
            <button className="button-type" type="submit" value={value}> {msj} </button>
       

    )

};

export default ButtonTypeTheEat;