import React from 'react';
import Recipe from './components/Recipe';
import IngredientsList from './components/ingredientsList';
import { getRecipeFromMistral } from './ai';
export default function Form(){
    const [ing,setIng]=React.useState([])
    const list=ing.map(ele=>
        <li key={ele}>{ele}</li>
    )
    function handleSubmit(event){
        event.preventDefault();
        const formData=new FormData(event.currentTarget)
        const newIng=formData.get("ingredients")
            setIng(prev=>[...prev,newIng])        
    }

    const [recipeShown,setRecipeShown]=React.useState(false);
    async function toggleRecipe(){
        const ans=await getRecipeFromMistral(ing);
        setRecipeShown(ans);
    }
    return(
        <div className="main">
            <form className="form-elements" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="eg. Eggs"
                    aria-label="inredients to add"
                    name="ingredients"
                    required
                ></input>
                <button>+ Add Ingredient</button>
            </form>

            {list.length>0? 
                <IngredientsList list={list} toggleRecipe={toggleRecipe}/>
            :null}

            <div className='recipe'>
            {recipeShown? 
                <Recipe ans={recipeShown}/> 
            :null}
            </div>

        </div>
    )
}