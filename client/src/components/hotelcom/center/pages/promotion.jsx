import React from 'react'
import Coupon from '../../widgets/coupon'
import CouponCard from '../../widgets/couponcard'

const Promotion = () => {
  return (
    <div className='flex flex-col'>
    {/* Title */}
      <h1 className='text-3xl font-bold'>Coupons</h1>
      {/* Coupon Adding */}
     <div className='my-10'>
     <Coupon/>
     </div>
      {/* Previous Coupons */}
      <h1 className='text-3xl font-bold my-5'>Previous Coupons</h1>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      <CouponCard/>
      </div>
    </div>
  )
}

export default Promotion