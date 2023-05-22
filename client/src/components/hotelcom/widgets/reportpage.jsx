import React from 'react';

const ReportPage = () => {
  // Function to handle button clicks for each report category
  const handleReportClick = (category) => {
    // Call the appropriate function to generate the report based on the category
    // ...
  };

  return (
    <div className="container mx-auto">
      {/* <h1 className="text-3xl font-bold mb-4">Reports</h1> */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Booking Report */}
        <button
          onClick={() => handleReportClick('booking')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Booking Report
        </button>

        {/* Cancellation Report */}
        <button
          onClick={() => handleReportClick('cancellation')}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Cancellation Report
        </button>

        {/* Payment Report */}
        <button
          onClick={() => handleReportClick('payment')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Payment Report
        </button>

        {/* Commission Report */}
        <button
          onClick={() => handleReportClick('commission')}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Commission Report
        </button>

        {/* Daily Report */}
        <button
          onClick={() => handleReportClick('daily')}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Daily Report
        </button>

        {/* Weekly Report */}
        <button
          onClick={() => handleReportClick('weekly')}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Weekly Report
        </button>

        {/* Monthly Report */}
        <button
          onClick={() => handleReportClick('monthly')}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Monthly Report
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
