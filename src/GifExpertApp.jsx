import React, {useState} from 'react'
import { AddCategory } from './AddCategory/AddCategory';
import { GifGrid } from './AddCategory/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const handleAdd = () => {
       // setCategories([... categories, 'hunter']);
        setCategories(cast => [... cast, 'hunter']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map(category => 
                        (
                            <GifGrid 
                            key={category}
                            category={category} />
                        )
                    )
                }
            </ol>
        </>
    )
}
