"use client";

import React, { useState } from "react";
import { SearchBar } from "./searchBar";
import { IngredientComponent } from "./ingredient";

export function Search_Ingredients(){
    const [ingredients, setIngredients] = useState<string[]>([]);
    
    const deleteIngredient = (delIngredient:string) => {
        const newIngredients = ingredients.filter((ingredient:string) => ingredient != delIngredient);
        setIngredients(newIngredients);
    }

    const passIngredients = (passedIngredients:string[]) => {
        setIngredients(passedIngredients)
    }

    return(
        <div className='flex w-full h-full flex-col'>
            <div className='h-10 max-w-[1000px] w-[80%] relative'>
                <SearchBar topIngredients={ingredients} passIngredients={passIngredients}/>
            </div>
            <div className='flex mt-10'>
                {ingredients.map((ingredient:string) => {
                    return(
                        <IngredientComponent ingredient={ingredient} onClose={() => deleteIngredient(ingredient)}/>
                    )
                })}
            </div>
        </div>
    )
}