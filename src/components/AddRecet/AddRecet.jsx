import { React, useState } from 'react'
import InputTheRecetForm from './Input'
import ButtonTypeTheEat from './Button-type'
import Button from '../../utils/button'
import InputRadio from './input-radio'
import TexTareaForm from './TexArea'
import RecipePhoto from './Recipe-photo'
import SelectCondiments from './selectCondiments/select'
import CondimentsList from './selectCondiments/CondimentsList'
import ButtonCondiments from './selectCondiments/ButtonCondiment'

import '../../assets/css-addRecet/fomr.css'


const AddRecet = () => {
    const condimentsArray = [
        'pimienta',
        'sal',
        'azucar',
        'oregano',
        'tomillo',
        'salsa de soya',
        'paprica',
        'ajo'];
    const [condimentsSelected, setCondimentsSelected] = useState([]);
    const [condiments, setCondimentes] = useState(condimentsArray);


    const condimentsSelectOfUser = (event) => {
        
        if(!condimentsSelected.includes( event.target.value)){

            console.log("event target: ", event.target.value);
            setCondimentsSelected([...condimentsSelected, event.target.value])
        }else{
            console.log('ya existe');
        }

        

       
    };



    return (
        <section className='form' >
            <h1 className='form__Title'> ¡Comparte tus
                ricos descubrimientos!</h1>


            <form className='form__information'>

                <div className='form__information--nameP'>
                    <InputTheRecetForm
                        label='Nombre de la receta'
                        type="text"
                        placeholder="titulo"

                    />
                    <RecipePhoto />
                </div>
                <br></br>
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



                <CondimentsList>
                   <SelectCondiments onClick={condimentsSelectOfUser} condiments={condiments}/>
                    {condimentsSelected.map((item, index) => {
                        return (
                            <ButtonCondiments item={item} key={index} />                            
                        )

                    })}
                </CondimentsList>

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