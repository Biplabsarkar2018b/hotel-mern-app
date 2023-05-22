import React from "react";

const wishlist = [
  {
    id: 1,
    name: "Luxury Hotel",
    image:
      "https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    details: "5-star luxury hotel with spa and rooftop pool.",
    priceOvernight: 250,
    priceHourly: 50,
    available: true,
  },
  {
    id: 2,
    name: "Beach Resort",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    details: "Beachfront resort with private villas and water sports.",
    priceOvernight: 180,
    priceHourly: 35,
    available: false,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  {
    id: 3,
    name: "City View Inn",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    details: "Budget-friendly hotel with convenient city location.",
    priceOvernight: 90,
    priceHourly: 20,
    available: true,
  },
  // Add more hotels to the wishlist...
];

const UserWishlistPage = () => {
  const handleRemoveFromWishlist = (id) => {
    // Handle removing the hotel from the wishlist based on its ID
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {wishlist.map((hotel, ind) => (
          <div key={ind} className="bg-white rounded-lg shadow-md relative">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <button
                className="absolute top-4 right-4 text-red-500"
                onClick={() => handleRemoveFromWishlist(ind)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.details}</p>
              <p className="text-gray-600 font-bold">
                Price (Overnight): ${hotel.priceOvernight}
              </p>
              <p className="text-gray-600">
                Price (Hourly): ${hotel.priceHourly}
              </p>
              <p className="text-gray-600">
                {hotel.available ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWishlistPage;
