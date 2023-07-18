import React, { useState } from 'react';
import { BsArrowLeft, BsCheck2, BsPencil } from 'react-icons/bs';

const Profile = ({ handleCloseOpenProfile }) => {
  const [flag, setFlag] = useState(false);
  const [userName, setUserName] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleFlag = () => {
    setFlag(true);
  };

  const handleCheckClick = () => {
    setFlag(false);
  };
  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
        <BsArrowLeft className="cursor-pointer text-2xl font-bold" onClick={handleCloseOpenProfile} />
        <p className="cursor-pointer font-semibold">Profile</p>
      </div>
      {/* Update Profile */}
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput">
          <img className="rounded-full w-[15vw] h-[15vw] cursor-pointer" src="https://cdn.pixabay.com/photo/2023/05/29/00/23/great-spotted-woodpecker-8024806_640.jpg" alt="" />
        </label>
        <input type="file" id="imgInput" className="hidden" />
      </div>
      {/* Name Section */}
      <div className="bg-white px-3">
        <p className="py-3">Your Name</p>
        {!flag && (
          <div className="w-full flex justify-between items-center">
            <p className="py-3">{'Username' || userName}</p>
            <BsPencil onClick={handleFlag} className="cursor-pointer" />
          </div>
        )}
        {
                    flag
                    && (
                    <div className="w-full flex justify-between items-center py-2">
                      <input onChange={handleNameChange} className="w-[80%] outline-none border-b-2 border-blue-700 p-2" type="text" placeholder="Enter your name" />
                      <BsCheck2 onClick={handleCheckClick} className="cursor-pointer text-2xl" />
                    </div>
                    )
                }
      </div>
      <div className="px-3 my-5">
        <p className="py-10">This name will be visible to your whatsapp contacts.</p>
      </div>
    </div>
  );
};

export default Profile;
