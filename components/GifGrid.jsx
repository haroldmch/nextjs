import React from 'react'
import { useGifs } from '../hooks/useGifs'
import GifItem from './GifItem'

const GifGrid = ({category, remove}) => {
  const {images, isLoading} = useGifs(category)

  return (
    <>
      <h3>
        {category}
        <button onClick={() => {remove(category)}}>x</button>
      </h3>
      
      { isLoading && (<h2>Loading, please wait...</h2>) }
      <div>
        {
          images.map( (img) => (
            <GifItem 
              key={img.id}
              { ...img }/>
          ))
        }
      </div>
    </>
  )
}

export default GifGrid