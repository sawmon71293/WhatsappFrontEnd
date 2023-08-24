import { Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import { TbCircleDashed } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { currentUser, logoutAction } from '../../Redux/Auth/Action'
import ChatCard from '../ChatCard'
import CreateGroup from '../CreateGroup/CreateGroup'
import MessageCard from '../MessageCard'
import Profile from '../Profile/Profile'
import "./HomePage.css"


const HomePage = () => {
    const [query, setQuery] = useState('');
    const [currentChat, setCurrentChat] = useState(null);
    const [isProfile, setIsProfile] = useState(false);
    const [content, setContent] = useState('');
    const [isGroup, setIsGroup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const { auth } = useSelector(store => store);

    //profile dropdown
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //custom functions
    const handleSearch = () => { }
    const handleClickOnChatCard = () => {
        setCurrentChat(true);
    }
    const handleCreateNewMessage = () => { }
    const handleNavigate = () => {
        setIsProfile(true);
    }
    const handleCloseOpenProfile = () => {
        setIsProfile(false)
    }
    const handleCreateGroup = () => {
        setIsGroup(true);
    }
    useEffect(() => {
        if (token) {
            dispatch(currentUser(token))
        }

    }, [token, dispatch])

    const handleLogout = () => {
        dispatch(logoutAction());
        navigate("/signup");
    }


    useEffect(() => {
        if (!auth.reqUser) {
            navigate("/signup");
        }
    }, [auth.reqUser]);

    return (
        <div className='relative bg-slate-400'>
            <div className=' top-0  py-14 bg-[#035193] w-full '></div>
            <div className='flex bg-[#f0f2f5] h-[90vh]  w-[96vw] absolute top-[5vh] left-[2vw]'>
                <div className='left w-[30%] bg-[#e8e9ec] h-full'>
                    {/*  */}

                    {isGroup && <CreateGroup />}
                    {/* Profile */}
                    {isProfile && <div className='w-full h-full'>
                        <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
                    </div>}
                    {!isProfile && !isGroup && <div className='w-full'>

                        {/* Home */}
                        < div className='flex justify-between items-center p-3'>
                            <div onClick={handleNavigate} className='flex items-center space-x-3' >
                                <img src="https://cdn.pixabay.com/photo/2023/06/03/10/57/insect-8037418__340.jpg" alt="nature" className='rounded-full w-10 h-10 cursor-pointer' />
                                <p>{auth.reqUser?.full_name}</p>
                            </div>
                            <div className='space-x-3 text-2xl flex'>
                                <TbCircleDashed className='cursor-pointer' onClick={() => navigate("/status")} />
                                <BiCommentDetail />

                                <div>

                                    <BsThreeDotsVertical
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    />

                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleCreateGroup}>Create Group</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <div className='relative flex justify-center items-center bg-white py-4 px-3'>
                            <input
                                placeholder='Search or start new chat '
                                className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2' type="text"
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                    handleSearch(e.target.value)
                                }}
                                value={query}
                            />
                            <AiOutlineSearch className='left-5 top-7 absolute' />
                            <div>
                                <BsFilter className='ml-4 text-3xl' />
                            </div>
                        </div>
                        {/* all users */}
                        <div className='bg-white overflow-y-scroll h-[72vh]'>
                            {query && [1, 1, 1, 1].map((item) =>
                                <div onClick={handleClickOnChatCard}>
                                    <hr />
                                    <ChatCard />
                                </div>)}
                            <div></div>
                        </div>
                    </div>

                    }
                </div>

                {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full '>
                    <div className='max-w-[70%]  text-center'>
                        <img src="https://cdn.pixabay.com/photo/2018/04/27/11/13/group-3354366_640.png" alt="" /></div>
                    <h1 className='text-4xl text-grey-600'>Whatsapp Web</h1>
                    <p className='my-9'>Send and receive message without keeping your phone online.
                        Use whatsapp on up to 4 Linked devices</p>
                </div>
                }
                {/* Message */}
                {
                    currentChat &&
                    <div className='w-[75%] relative bg-blue-200'>
                        <div className='header absolute top-0 w-full bg-[#f0f2f5]'>
                            <div className='flex justify-between'>
                                <div className='py-3 space-x-4 flex items-center px-3'>
                                    <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/11/04/54/squirrel-7985502__340.jpg" alt="" />
                                    <p>{auth.reqUser?.full_name}</p>
                                </div>
                                <div className='py-3 space-x-4 items-center flex px-3'>
                                    <AiOutlineSearch />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                        {/* Message section */}
                        <div className='px-10 h-[85vh] overflow-y-scroll '>

                            <div className='space-y-1 flex flex-col justify-center w-full  mt-20 py-2'>
                                {[1, 1, 1, 1].map((item, i) => <MessageCard isReqUserMessage={i % 2 === 0} content={"Message Message Message Message Message"} />)}
                            </div>
                        </div>
                        {/* Footer Section */}
                        <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
                            <div className='flex justify-between items-center px-5 relative' >

                                <BsEmojiSmile className="cursor-pointer" />
                                <ImAttachment />

                                <input className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]' type="text" onChange={(e) => setContent(e.target.value)}
                                    placeholder='Type message'
                                    value={content}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            handleCreateNewMessage();
                                            setContent("");
                                        }
                                    }} />
                                <BsMicFill />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default HomePage