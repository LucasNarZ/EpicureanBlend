
import React from 'react';

import { Search_Ingredients } from './components/search_ingredients';
import { RecipesList } from './components/recipesList';
import { getRecipes } from './functions/getRecipes';



export default async function Home(
    {searchParams}: 
    {searchParams:{ingredients:string}}) {
    let recipes:any[] = await getRecipes(searchParams.ingredients);
    return (
        <div className='w-[100vw] h-auto min-h-[100vh] bg-white'>
            <header className='flex h-30 items-center'>
                <img src="logo_size.jpg" alt="logo" className='w-30 justify-self-start ml-5'/>
                <Search_Ingredients />

            </header>
            <RecipesList recipes={recipes}/>
        </div>
    )
}
