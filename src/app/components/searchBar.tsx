"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';

export function SearchBar({topIngredients, passIngredients}:{topIngredients:string[], passIngredients:(ingredients:string[]) => void}){
    const router = useRouter();

    const [ingredient, setIngredient] = useState<string>("");
    const [ingredients, setIngredients] = useState<string[]>(topIngredients);
    const [ingredientsString, setIngredientsString] = useState<string>("");

    useEffect(() => {
        setIngredientsString("?ingredients=" + ingredients.join(",+"))
    }, [ingredients])

    const addIngredient = () => {
        const newIngredients = [...ingredients, ingredient];
        setIngredients(newIngredients);
        passIngredients(newIngredients);
        setIngredient(""); 
    }

    const handleEnterKeyPress = (e:any) => {
        if (e.key === 'Enter') {
            addIngredient();
        }
    };

    return(
        <React.Fragment>
            <input type="text" className='focus:border-blue-100 focus:outline-none bg-gray-50 w-full h-full justify-self-center border-[1px] border-blue-600  rounded text-black pl-5' onChange={(e) => setIngredient(e.target.value)} value={ingredient} onKeyDown={handleEnterKeyPress} />
            <SearchIcon className='absolute top-[50%] translate-y-[-50%] right-10 text-black cursor-pointer' onClick={() => router.push(ingredientsString)} />
            <button onClick={() => {
                addIngredient();
                }} className="text-black border-black">Add Ingredient</button>
        </React.Fragment>
    )
}