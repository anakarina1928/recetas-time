import React from 'react'
import '../../assets/css-addRecet/texTareaForm.css'

const TexTareaForm = ({ value, label, placeholder }) => {

    return (

        <section className='instructions'>
            <label className='instructions__info--label' htmlFor={value} >{label}</label>
            <textarea className='instructions__info--textarea' id={value} placeholder={placeholder} value={value}  rows ='3' autoComplete="off">
            </textarea>
        </section>

    )

};

export default TexTareaForm;