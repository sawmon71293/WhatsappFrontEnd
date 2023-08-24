import React from 'react'

const ChatCard = () => {
    return (
        <div className='flex items-center justify-center py-2 group cursor-pointer'>
            <div>
                <img className='h-14 w-14 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/11/04/54/squirrel-7985502__340.jpg" alt="" />
            </div>
            <div className='pl-5 w-[80%]'>
                <div className='flex justify-between item-center'>
                    <p className='text-lg'>Username</p>
                    <p className='text-sm'>timeStamp</p>
                </div>
                <div className='flex justify-between item-center'>
                    <p>Message....</p>
                    <div className='flex space-x-4 items-center'>
                        <p className='text-xs  px-3  py-2 text-white bg-green-500 rounded-full'>5</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatCard