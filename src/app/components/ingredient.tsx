import CloseIcon from '@mui/icons-material/Close';

type IngredientTypes = {
    ingredient:string;
    onClose:() => void;
}

export function IngredientComponent({ingredient, onClose }:IngredientTypes){
    return(
        <div className='w-auto h-8 rounded-xl bg-gray-200 flex items-center px-3 mx-3'>
            <span className='text-black text-center'>{ingredient}</span>
            <CloseIcon onClick={onClose} className='text-black cursor-pointer'/>
        </div>
    )
}