import React from 'react';

type recipe = {
    title:string;
    image:string;
}


export function RecipePreview({title, image}:recipe){
    return(
        <div className='w-[95vw] max-w-[1200px] h-90 bg-blue-50 text-black mt-5'>
            <span>{title}</span>
            <img src={image} alt="image" />
        </div>
    )
}