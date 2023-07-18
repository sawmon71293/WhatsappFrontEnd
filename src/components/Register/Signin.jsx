import React, { useState } from 'react';
import { Alert, Button, Snackbar } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {

  };
  const handleSnackBarClose = () => {
    setOpenSnackBar(false);
  };
  const history = useHistory();
  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[30%] p-10 shadow-md bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-2">
              <p>Email</p>
              <input
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
                placeholder="Enter your password"
                type="password"
                className="py-2 outline outline-[#007AC2] w-full rounded-md border"
                onChange={(e) => handleChange(e)}
                value={inputData.password}
              />
            </div>
            <div>
              <Button type="submit" className="w-full" variant="contained">Sign in</Button>
            </div>

          </form>
          <div className="flex space-x-3 items-center mt-5">
            <p className="m-0">Create new account</p>
            <Button variant="text" onClick={() => history.push('/signup')}>Sign Up</Button>

          </div>
        </div>
      </div>

      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Login successful!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signin;
