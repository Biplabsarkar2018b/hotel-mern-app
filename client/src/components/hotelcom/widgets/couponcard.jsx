import React from 'react'

const CouponCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-700 to-blue-200 text-white px-4 py-3">
        <h2 className="text-lg font-bold">Special Offer</h2>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-700">Get <span className="font-bold text-yellow-500">50% off</span> on your next purchase!</p>
      </div>
      <div className="bg-gray-100 px-4 py-3">
        <p className="text-gray-600">Use coupon code: <span className="font-bold text-gray-900">SPECIAL50</span></p>
      </div>
    </div>
  )
}

export default CouponCard