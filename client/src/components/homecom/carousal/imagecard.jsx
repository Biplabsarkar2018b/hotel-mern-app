import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
        <img className='rounded-t-2xl' src={image} alt="hotel photo" />
    </div>
  )
}

export default ImageCard