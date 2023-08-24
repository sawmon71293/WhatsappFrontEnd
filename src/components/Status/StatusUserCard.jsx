import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatusUserCard = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/status/userId`);
    }
    return (
        <div onClick={handleNavigate} className='flex items-center p-3 cursor-pointer'>

            <div><img className='w-7 h-7 lg:w-10 lg:h-10 rounded-full' src="https://cdn.pixabay.com/photo/2022/01/22/00/32/bird-6956012__340.png" alt="birdie" /></div>
            <div className='ml-2 text-white'>
                <p>Username</p>
            </div>

        </div>
    )
}

export default StatusUserCard