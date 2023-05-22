import React from 'react'

const Places = ({place}) => {
  return (
    <div className='mx-2 shadow-lg shadow-gray-600 text-white px-4 py-2 bg-gray-600 hover:bg-gray-900 hover:cursor-pointer text-xl rounded-full text-center'>
        {place}
    </div>
  )
}

export default Places