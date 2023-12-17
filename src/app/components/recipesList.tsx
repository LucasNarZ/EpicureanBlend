import React  from "react";

import { RecipePreview } from './recipe';

export function RecipesList({recipes}:{recipes:any}){
    return(
        <div>
            {recipes.map((recipe:any) => {
                return(
                    <RecipePreview title={recipe.title} image={recipe.image}/>
                )
            })}
        </div>
    )
}