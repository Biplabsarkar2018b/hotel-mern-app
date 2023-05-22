import React from "react";

const UserCards = () => {
  return (
    <div className="flex">
      <div className="flex gap-2 bg-gray-300 px-4 py-3 rounded-lg">
        {/* image */}
        <div>
          <img
          // w-[160px] h-[160px]
            className="w-[160px] h-[160px] object-cover rounded-md"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="user photo"
          />
        </div>
        {/* details */}
        <div className="flex flex-col justify-between">
          <div>
            <div>
              {/* name */}
              <h1 className="text-2xl font-bold">Danny McLoan</h1>
            </div>
            <div>
              {/* Job */}
              <h1>Senior Journalist</h1>
              <div className="flex items-center justify-between">
                {/* Phone Number */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <h1 className="text-[10px]">+917645083747</h1>
                </div>
                {/* Email */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>

                  <h1 className="text-[10px]">biplabsarkar2018b@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 bg-slate-400 px-3 rounded-lg">
            <div className="flex-col">
              {/* Room No */}
              <div className="text-sm whitespace-nowrap">Room No</div>
              <div className="font-bold">24</div>
            </div>
            <div className="flex-col">
              {/* Room No */}
              <div className="text-sm whitespace-nowrap">Block No</div>
              <div className="font-bold">24</div>
            </div>
            <div className="flex-col">
              {/* Room No */}
              <div className="text-sm whitespace-nowrap">CheckedIn</div>
              <div className="font-bold">2 Jun</div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-3">
            <div>
              <h1 className="uppercase border rounded-md px-2 border-blue-500">chat</h1>
            </div>
            <div className="bg-blue-500 px-2 rounded-md text-white">FOLLOW</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
