import React from 'react'
import Profilesec from './profilesec'
import CustomerSatis from './customersatis'
import UpcomingArrival from './upcomingarrival'

const HotelRight = () => {
  return (
    <div className='flex flex-col pr-4 gap-9'>
        {/* Bell,inbox,profile */}
        <Profilesec/>

        {/* Customer Satisfaction */}
        <CustomerSatis/>

        {/* Upcoming Arrival */}
        <UpcomingArrival/>
    </div>
  )
}

export default HotelRight