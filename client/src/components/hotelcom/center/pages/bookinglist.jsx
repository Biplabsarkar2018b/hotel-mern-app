import React from 'react'
import Chips from '../../widgets/chips'
import UpcomingList from '../../right/upcominglist'

const Bookinglist = () => {
  return (
    <div className='flex flex-col'>
    {/* Title */}
    <h1 className='text-4xl mb-8 font-bold'>Booking List</h1>
      <div className='flex gap-2'>
        {/* Chips */}
        <Chips title={'All'}/>
        <Chips title={'New'}/>
        <Chips title={'Upcoming'}/>
        <Chips title={'Pay in Hotel'}/>
      </div>
      {/* Bookings */}
      <div className='flex flex-col mt-9'>
      <UpcomingList/>
      <UpcomingList/>
      <UpcomingList/>
      <UpcomingList/>
      <UpcomingList/>
      <UpcomingList/>
      </div>
    </div>
  )
}

export default Bookinglist