import React from 'react'
import InputTheRecetForm from './Input'
import ButtonTypeTheEat from './Button-type'
import Button from '../../utils/button'
import InputRadio from './input-radio'
import TexTareaForm from './TexArea'
import '../../assets/css-addRecet/fomr.css'


const AddRecet = () => {

    return (
        <section className='form' >
            <h1 className='form__Title'> ¡Comparte tus
                ricos descubrimientos!</h1>


            <form className='form__information'>
                <InputTheRecetForm
                    label='Nombre de la receta'
                    type="text"
                    placeholder="titulo"
                    
                /> <br></br>
                <div className='form__information--TypeTheEat'>
                    <ButtonTypeTheEat
                        msj='Desayuno'
                        value='desayuno'
                    />
                    <ButtonTypeTheEat
                        msj='Almuerzo'
                        value='Almuerzo' />
                    <ButtonTypeTheEat
                        msj='Cena'
                        value='Cena'
                    />
                    <ButtonTypeTheEat
                        msj='Merienda'
                        value='Merienda'
                    />
                </div>

                <TexTareaForm
                    label='Descripción'
                    placeholder="modo de preparación"
                    name="name"
                />
                
                <InputRadio />
                <br></br>
                <div className='form__information--button'>
                    <Button
                        msj='siguiente'
                    />
                </div>


            </form>
        </section>

    )
}

export default AddRecet;