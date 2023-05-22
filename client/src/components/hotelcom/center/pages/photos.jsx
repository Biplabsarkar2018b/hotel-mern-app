import React, { useState } from "react";
import axios from 'axios';

const Photos = () => {

  const [loading, setloading] = useState(false);


  const uploadImage = async(e)=>{
    setloading(true);
    const file = e.target.files[0];
    const data = new FormData();
    // for(const f in files){
      data.append('file',file);
    // }
    data.append('upload_preset','pbtn91oa');
    data.append('cloud_name','dxbljz9pf');

    axios.post('https://api.cloudinary.com/v1_1/dxbljz9pf/image/upload',data)
    .then((response)=>console.log(response))
    .then((res)=>setloading(false))
    .catch((error)=>console.log(error));
  }

  return (
    <div>
    {
      loading && (<h1>Loading</h1>)
    }
      <div className="flex flex-col border-2 border-dotted cursor-pointer border-black">
        <div className="flex justify-center px-10 py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-2h-24 h-24 text-blue-500"
          >
            <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
          </svg>
        </div>
        <h1 className="px-10 py-4">Drag Files to Upload</h1>
        <div className="bg-green-400 text-center p-3 font-bold text-white text-2xl">
          <input onChange={uploadImage} type="file" placeholder="Browse Files"/>
        </div>
      </div>
    </div>
  );
};

export default Photos;
