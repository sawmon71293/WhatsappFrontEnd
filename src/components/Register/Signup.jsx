import { Alert, Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentUser, register } from '../../Redux/Auth/Action';


const Signup = () => {

    const [inputData, setInputData] = useState({ full_name: "", email: "", password: "" });
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const { auth } = useSelector(store => store);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((values) => ({ ...values, [name]: value }));
    }
    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(inputData));
        setOpenSnackBar(true);
        setInputData({ full_name: "", email: "", password: "" });

    }

    useEffect(() => {
        if (token) {
            dispatch(currentUser(token));
        }

    }, [token, dispatch]);

    useEffect(() => {
        if (auth.reqUser?.full_name) {
            navigate("/")
        }
    }, [auth.reqUser])
    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>
                    <form onSubmit={(e) => handleSubmit(e)} className='space-y-5'>
                        <div className='space-y-2'>
                            <p>Full Name</p>
                            <input
                                name='full_name'
                                placeholder='Enter your full name'
                                type="text" className="p-2 outline outline-[#007AC2] w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.full_name}
                            />
                        </div>
                        <div className='space-y-2'>
                            <p>Email</p>
                            <input
                                name="email"
                                placeholder='Enter your email'
                                type="text" className="p-2 outline outline-[#007AC2] w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.email}
                            />
                        </div>
                        <div className='space-y-2'>
                            <p>Password</p>
                            <input
                                name='password'
                                placeholder='Enter your password'
                                type="password" className="p-2 outline outline-[#007AC2] w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.password} />
                        </div>
                        <div>
                            <Button type="submit" className='w-full' variant='contained'>Sign Up</Button>
                        </div>

                    </form>
                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Already have an account?</p>
                        <Button variant="text" onClick={() => navigate("/signin")}>Sign In</Button>

                    </div>
                </div>
            </div>

            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                    Your account successfully created!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Signup