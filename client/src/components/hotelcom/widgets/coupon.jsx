import React, { useState } from "react";

const Coupon = () => {
    const [discount, setDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState('');
  
    const handleDiscountChange = (e) => {
      setDiscount(e.target.value);
    };
  
    const handleCouponCodeChange = (e) => {
      setCouponCode(e.target.value);
    };
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-yellow-500 text-white px-4 py-3">
        <h2 className="text-lg font-bold">Special Offer</h2>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-700">Get <span className="font-bold text-yellow-500">{discount}% off</span> on your next purchase!</p>
      </div>
      <div className="bg-gray-100 px-4 py-3">
        <p className="text-gray-600">Use coupon code: <span className="font-bold text-gray-900">{couponCode}</span></p>
      </div>
      <div className="px-4 py-3">
        <label htmlFor="discount">Discount (%):</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={handleDiscountChange}
          className="w-full bg-gray-200 px-3 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white"
        />
        <label htmlFor="couponCode" className="mt-3">Coupon Code:</label>
        <input
          type="text"
          id="couponCode"
          value={couponCode}
          onChange={handleCouponCodeChange}
          className="w-full bg-gray-200 px-3 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white"
        />
      </div>
    </div>
  );
};

export default Coupon;
