import React from 'react'
import '../../assets/recipe-photo.css'
import iconoPhoto from  '../../assets/css-addRecet/img/icono-photo.svg'

const RecipePhoto = () =>{

    return(
      <figure className='recipePhoto'>
         <img src={iconoPhoto}alt="save photo"/>
         <p>Añadir foto de portada</p>

      </figure>
          

    

    )
};

export default RecipePhoto;