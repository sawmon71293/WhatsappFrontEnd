
import {
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/Register/Signin';
import SignUp from './components/Register/Signup';
import Status from './components/Status/Status';
import StatusViewer from './components/Status/StatusViewer';


function App() {

  return (

    <div className='app'>
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/status" element={<Status />} />
          <Route path="/status/:userId" element={<StatusViewer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>



  )
}

export default App
