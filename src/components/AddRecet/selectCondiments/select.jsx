import { React } from 'react'



const SelectCondiments = ({condiments,onClick}) => {
 
    

    return (

        <select id="condiments" onChange={onClick}>

            {condiments.map((item, index) =>  <option value={item} key={index}> {item} </option> )}

        </select>


    );



}

export default SelectCondiments;

