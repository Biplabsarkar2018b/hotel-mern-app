import React from 'react'

const Footericons = ({icon,name}) => {
  return (
    <div className='flex items-center gap-3 my-2 cursor-pointer hover:text-green-400'>
        <div>{icon}</div>
        <h1>{name}</h1>
    </div>
  )
}

export default Footericons