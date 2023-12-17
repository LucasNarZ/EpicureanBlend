require('dotenv').config();

export async function getRecipes(ingredients:string):Promise<any>{
    const apiKey = process.env.API_KEY;

    if(ingredients != undefined){
        const res = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients + "&fillIngredients=true&number=50&apiKey=" + apiKey);
        const jsonData = await res.json();
        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        return jsonData;
    }
    
}