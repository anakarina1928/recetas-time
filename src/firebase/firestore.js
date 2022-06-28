import { collection, doc, getDoc, addDoc, query, onSnapshot, orderBy, where, updateDoc, deleteDoc } from '@firebase/firestore';
import { db } from './config';


//Ref recipe
const collectionRecipe = collection(db, 'recetas');

export const saveRecipeInCollection = async (newRecipe) => {
    try {
      const saveRecipe = await addDoc(collectionRecipe,newRecipe );
      return saveRecipe ;
    } catch (error) {
      console.log('La receta no pudo ser guardada');
      throw new Error(error);
    }
  };
  
