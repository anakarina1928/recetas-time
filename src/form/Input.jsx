import React from 'react'
import './inputtext.css'

const InputTheRecetForm = ({ value, label, placeholder, type }) => {

    return (

        <section className='inputName'>
            <label className='inputName__inf--label' htmlFor={value} >{label}</label>
            <input className='inputName__inf--nameRecet' type={type} id={value} placeholder={placeholder} value={value} autoComplete="off">
            </input>
        </section>

    )

};

export default InputTheRecetForm;