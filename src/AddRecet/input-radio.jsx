import React from 'react'
import InputTheRecetForm from './Input';
import '../assets/css-addRecet/input-radio.css'

const InputRadio = () => {

    return (

        <section className='container'>
            <InputTheRecetForm
                label='30 min '
                type="radio"
                value='30 min'

            />
            <InputTheRecetForm
                label='60 min'
                type="radio"
                value='60 min'
            />
            <InputTheRecetForm
                label='90 min '
                type="radio"
                value='90 min '
            />

        </section>

    )

};

export default  InputRadio;