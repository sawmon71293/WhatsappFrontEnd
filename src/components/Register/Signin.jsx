import { Alert, Button, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentUser, login } from '../../Redux/Auth/Action';

const Signin = () => {
    const [inputData, setInputData] = useState({ email: "", password: "", });
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);
    const token = localStorage.getItem('token');

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenSnackBar(true);
        dispatch(login(inputData));
    }
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputData((values) => ({ ...values, [name]: value }));
    }
    const handleSnackBarClose = () => {
        setOpenSnackBar(false);
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            dispatch(currentUser(token));
        }

    }, [token]);

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
                            <p>Email</p>
                            <input
                                placeholder='Enter your email'
                                type="text" className="p-2 outline outline-[#007AC2] w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.email}
                                name="email"
                            />
                        </div>
                        <div className='space-y-2'>
                            <p>Password</p>
                            <input
                                placeholder='Enter your password'
                                type="password" className="p-2 outline outline-[#007AC2] w-full rounded-md border"
                                onChange={(e) => handleChange(e)}
                                value={inputData.password}
                                name="password"
                            />
                        </div>
                        <div>
                            <Button type="submit" className='w-full' variant='contained'>Sign in</Button>
                        </div>

                    </form>
                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Create new account</p>
                        <Button variant="text" onClick={() => navigate("/signup")}>Sign Up</Button>

                    </div>
                </div>
            </div>

            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                    Login successful!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Signin