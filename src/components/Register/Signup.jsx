import { Alert, Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../../store/Action';

const Signup = () => {
  const [inputData, setInputData] = useState({ full_name: '', email: '', password: '' });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };
  const handleSnackBarClose = () => {
    setOpenSnackBar(false);
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(inputData));
    setOpenSnackBar(true);
    setInputData({ full_name: '', email: '', password: '' });
  };
  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[30%] p-10 shadow-md bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <p>Full Name</p>
              <input
                name="full_name"
                placeholder="Enter your full name"
                type="text"
                className="py-2 outline outline-[#007AC2] w-full rounded-md border"
                onChange={(e) => handleChange(e)}
                value={inputData.full_name}
              />
            </div>
            <div className="space-y-2">
              <p>Email</p>
              <input
                name="email"
                placeholder="Enter your email"
                type="text"
                className="py-2 outline outline-[#007AC2] w-full rounded-md border"
                onChange={(e) => handleChange(e)}
                value={inputData.email}
              />
            </div>
            <div className="space-y-2">
              <p>Password</p>
              <input
                name="password"
                placeholder="Enter your password"
                type="password"
                className="py-2 outline outline-[#007AC2] w-full rounded-md border"
                onChange={(e) => handleChange(e)}
                value={inputData.password}
              />
            </div>
            <div>
              <Button type="submit" className="w-full" variant="contained">Sign Up</Button>
            </div>

          </form>
          <div className="flex space-x-3 items-center mt-5">
            <p className="m-0">Already have an account?</p>
            <Button variant="text" onClick={() => history.push('/signin')}>Sign In</Button>

          </div>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Your account successfully created!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
