import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { stories } from './DummyStories';
import ProgressBar from './ProgressBar';

const StatusViewer = () => {
    const [currentStory, setCurrentStory] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const handleNextStory = () => {
        if (currentStory < stories.length - 1) {
            setCurrentStory(currentStory + 1);
            setActiveIndex(activeIndex + 1);

        }
        else {
            setCurrentStory(0);
            setActiveIndex(0);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextStory();
        }, 3000)
        return () => clearInterval(intervalId)
    }, [currentStory])

    const handleNavigate = () => {
        navigate("/status");
    }

    return (
        <div>
            <div className='relative flex justify-center items-center h-[100vh] bg-slate-900'>
                <div className='relative'>
                    <img className='max-h-[96vh] object-contain' src={stories?.[currentStory].image} alt="stories" />
                    <div className='absolute top-0 flex w-full'>
                        {stories.map((item, index) => <ProgressBar key={index} duration={3000} index={index} activeIndex={activeIndex} />)}
                    </div>
                </div>
            </div>
            <div>
                <BsArrowLeft onClick={handleNavigate} className='text-white text-4xl cursor-pointer absolute  top-0 left-10' />
                <AiOutlineClose onClick={handleNavigate} className="text-white text-4xl cursor-pointer absolute  top-5 right-10" />
            </div>
        </div>
    )
}

export default StatusViewer