import React from "react";

const bookings = [
  {
    id: 1,
    hotelName: "Luxury Hotel",
    bookingDate: "2023-06-01",
    cost: 150,
  },
  {
    id: 2,
    hotelName: "Beach Resort",
    bookingDate: "2023-06-15",
    cost: 200,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  {
    id: 3,
    hotelName: "City View Inn",
    bookingDate: "2023-07-10",
    cost: 120,
  },
  // Add more bookings here...
];

const UserBookingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bookings.map((booking, ind) => (
          <div
            key={ind}
            className="bg-gradient-to-b from-blue-700 to-blue-100 rounded-lg shadow-gray-400 shadow-md"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">
                {booking.hotelName}
              </h2>
              <p className="text-white">Booked on {booking.bookingDate}</p>
              <p className="text-white">Cost: ${booking.cost}</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-600">
                Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBookingPage;
