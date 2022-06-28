import React from 'react'
import '../assets/css-addRecet/button-type.css'

const ButtonTypeTheEat= ({ msj, value }) => {

    return (

        
            <button className="button-type" type="submit" value={value}> {msj} </button>
       

    )

};

export default ButtonTypeTheEat;