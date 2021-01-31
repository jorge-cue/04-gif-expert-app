import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
            
            { loading && <p>Loading...</p> }
            {
                images.map( gif => ( 
                    <GifGridItem 
                        key= {gif.id} 
                        { ...gif } 
                    /> ))
            }
            </div>
        </>
    )
}
