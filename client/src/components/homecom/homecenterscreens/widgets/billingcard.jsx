import React, { useState } from 'react';

const billingDetails = [
  {
    id: 1,
    hotelName: 'Luxury Hotel',
    checkInDate: '2023-05-01',
    checkOutDate: '2023-05-03',
    amountPaid: 200,
    totalAmount: 200,
    hotelDetails: {
      email: 'info@luxuryhotel.com',
      phone: '123-456-7890',
      address: '123 Main Street, City, Country',
    },
  },
  {
    id: 1,
    hotelName: 'Luxury Hotel',
    checkInDate: '2023-05-01',
    checkOutDate: '2023-05-03',
    amountPaid: 200,
    totalAmount: 200,
    hotelDetails: {
      email: 'info@luxuryhotel.com',
      phone: '123-456-7890',
      address: '123 Main Street, City, Country',
    },
  },
  {
    id: 1,
    hotelName: 'Luxury Hotel',
    checkInDate: '2023-05-01',
    checkOutDate: '2023-05-03',
    amountPaid: 200,
    totalAmount: 200,
    hotelDetails: {
      email: 'info@luxuryhotel.com',
      phone: '123-456-7890',
      address: '123 Main Street, City, Country',
    },
  },
  {
    id: 1,
    hotelName: 'Luxury Hotel',
    checkInDate: '2023-05-01',
    checkOutDate: '2023-05-03',
    amountPaid: 200,
    totalAmount: 200,
    hotelDetails: {
      email: 'info@luxuryhotel.com',
      phone: '123-456-7890',
      address: '123 Main Street, City, Country',
    },
  },
  {
    id: 2,
    hotelName: 'Beach Resort',
    checkInDate: '2023-06-15',
    checkOutDate: '2023-06-20',
    amountPaid: 150,
    totalAmount: 250,
    hotelDetails: {
      email: 'info@beachresort.com',
      phone: '987-654-3210',
      address: '456 Beach Road, City, Country',
    },
  },
  {
    id: 2,
    hotelName: 'Beach Resort',
    checkInDate: '2023-06-15',
    checkOutDate: '2023-06-20',
    amountPaid: 150,
    totalAmount: 250,
    hotelDetails: {
      email: 'info@beachresort.com',
      phone: '987-654-3210',
      address: '456 Beach Road, City, Country',
    },
  },
  {
    id: 2,
    hotelName: 'Beach Resort',
    checkInDate: '2023-06-15',
    checkOutDate: '2023-06-20',
    amountPaid: 150,
    totalAmount: 250,
    hotelDetails: {
      email: 'info@beachresort.com',
      phone: '987-654-3210',
      address: '456 Beach Road, City, Country',
    },
  },
  {
    id: 2,
    hotelName: 'Beach Resort',
    checkInDate: '2023-06-15',
    checkOutDate: '2023-06-20',
    amountPaid: 150,
    totalAmount: 250,
    hotelDetails: {
      email: 'info@beachresort.com',
      phone: '987-654-3210',
      address: '456 Beach Road, City, Country',
    },
  },
  // Add more billing details here...
];

const UserBillingPage = () => {
  const [displayPaid, setDisplayPaid] = useState(true);

  const handleDisplayPaid = () => {
    setDisplayPaid(true);
  };

  const handleDisplayDues = () => {
    setDisplayPaid(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Billing Details</h1>
      <div className="flex gap-5 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            displayPaid ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={handleDisplayPaid}
        >
          Paid
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            !displayPaid ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={handleDisplayDues}
        >
          Dues
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {billingDetails.map((billing,ind) => {
          const { id, hotelName, checkInDate, checkOutDate, amountPaid, totalAmount, hotelDetails } = billing;
          const isPaid = amountPaid === totalAmount;

          if ((displayPaid && isPaid) || (!displayPaid && !isPaid)) {
            return (
              <div key={ind} className="bg-gradient-to-b text-black font-bold from-pink-200 to-pink-600 rounded-lg shadow-md">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{hotelName}</h2>
                  <p className="">Check-in: {checkInDate}</p>
                  <p className="">Check-out: {checkOutDate}</p>
                  <p className="">
                    Payment: {isPaid ? `Paid $${amountPaid}` : `Due $${totalAmount - amountPaid}`}
                  </p>
                  <p className="">Email: {hotelDetails.email}</p>
                  <p className="">Phone: {hotelDetails.phone}</p>
                  <p className="">Address: {hotelDetails.address}</p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default UserBillingPage;
