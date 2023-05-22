import React from 'react'
import UserCards from '../../widgets/usercards'

const Userdetail = () => {
  return (
    <div className='flex flex-col'>
      {/* title */}
      <h1 className='text-3xl font-bold mb-6'>Booked Users</h1>
      {/* User Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      <UserCards/>
      </div>
    </div>
  )
}

export default Userdetail