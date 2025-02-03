export default function IngredientsList(props){
    return(
        <section>
                <h3>Ingredients on hand:</h3>
                <div className='parent-container'>
                    <ul>{props.list}</ul>
                </div>
                <div className='parent-container'>
                {props.list.length>=4? <div className="create">
                    <div>
                        <p>Ready for a recipe?</p>
                        <h6>Generate a recipe from the list of your ingredients.</h6>
                        <span>(May take a few seconds to generate)</span>
                    </div>
                    <button onClick={props.toggleRecipe}>Get a Recipe</button>
                    
                </div>:null}
                </div>
            </section>
    )
}