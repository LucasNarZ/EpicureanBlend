"use client";

import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IngredientComponent } from './components/ingredient';



export default function Home() {
    const [ingredient, setIngredient] = useState<string>("");
    const [ingredients, setIngredients] = useState<Array<string>>([]);

    const deleteIngredient = (delIngredient:string) => {
        const newIngredients = ingredients.filter((ingredient) => ingredient != delIngredient);
        setIngredients(newIngredients);
    }

    const handleEnterKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            setIngredients([...ingredients, ingredient]);
            setIngredient("");
        }
    };


    return (
        <div className='w-[100vw] h-[100vh] bg-white'>
            <header className='flex h-30 items-center'>
                <img src="logo_size.jpg" alt="logo" className='w-30 justify-self-start ml-5'/>
                <div className='flex w-full h-full flex-col'>
                    <div className='h-10 max-w-[1000px] w-[80%] relative'>
                        <input type="text" className='focus:border-blue-100 focus:outline-none bg-gray-50 w-full h-full justify-self-center border-[1px] border-blue-600  rounded text-black pl-5' onChange={(e) => setIngredient(e.target.value)} value={ingredient} onKeyDown={handleEnterKeyPress} />
                        <SearchIcon className='absolute top-[50%] translate-y-[-50%] right-10 text-black cursor-pointer' onClick={() => {setIngredients([...ingredients, ingredient]);setIngredient("")}}/>
                    </div>
                    <div className='flex mt-3'>
                        {ingredients.map(ingredient => {
                            return(
                                <IngredientComponent ingredient={ingredient} onClose={() => deleteIngredient(ingredient)}/>
                            )
                        })}
                    </div>
                </div>
                
            </header>
            
        </div>
    )
}
