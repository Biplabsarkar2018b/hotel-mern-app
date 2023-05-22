import React from 'react'


const Logo = () => {
  return (
    <div className='flex items-center py-3'>
        <img className='w-10 h-12 object-cover' src='/logo.svg' alt="logo" />
        <h1 className='text-3xl font-serif'>DEMO</h1>
    </div>
  )
}

export default Logo