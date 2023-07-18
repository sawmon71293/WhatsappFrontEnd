import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import StatusUserCard from './StatusUserCard';

const Status = () => {
  const history = useHistory();
  const handleNavigate = () => {
    history.push('/');
  };
  return (
    <div>
      <div className="flex items-center px-[14vw] py-[17vh]">
        {/* left side */}
        <div className="left h-[85vh] bg-[#1e262c] lg:w-[25%] w-[50%] px-5">
          <div className="pt-5 h-[20%]">
            <StatusUserCard />
          </div>
          <hr />
          <div className="overflow-y-scroll h-[70%] p-2">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => <StatusUserCard key={i} />)}
          </div>
        </div>
        {/* right side */}
        <div className="relative h-[85vh] w:[50%] lg:w-[70%] bg-[#0b141a]">
          <AiOutlineClose onClick={handleNavigate} className="text-white cursor-pointer absolute top-5 right-10 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Status;
