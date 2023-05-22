import React from "react";

const cities = [
  {
    id: 1,
    name: "New York City",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Experience the hustle and bustle of the Big Apple!",
  },
  {
    id: 2,
    name: "Paris",
    image:
      "https://plus.unsplash.com/premium_photo-1678286771657-cf22aa97faf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Explore the romantic streets of the City of Love.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  {
    id: 3,
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
  },
  // Add more cities here...
];

const ExploreCityPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore Cities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cities.map((city,ind) => (
          <div key={ind} className="bg-white rounded-lg shadow-md">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{city.name}</h2>
              <p className="text-gray-600">{city.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCityPage;
