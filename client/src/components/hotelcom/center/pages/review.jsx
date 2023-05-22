import React from 'react'
import UserReview, { SpareCard } from '../../widgets/userreview'

const Review = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl font-bold'>User Reviews</h1>

      {/* Review Component */}
      <div className='flex flex-col gap-7 mt-6'>
      {/* <SpareCard/> */}
      <UserReview/>
      <UserReview/>
      <UserReview/>
      <UserReview/>
      <UserReview/>
      <UserReview/>
      </div>
    </div>
  )
}

export default Review