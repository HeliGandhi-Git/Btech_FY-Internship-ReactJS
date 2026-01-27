import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ChangePassword from './Components/ChangePassword'
import Display from './Components/Display'
import Home from './Components/Home'
import ForgotPassword from './Components/ForgotPassword'
import EditProfile from './Components/EditProfile'
function App() {

  return ( <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/display" element={<Display />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
        </Routes>
        </Router>
  
  </div> );
}

export default App;
<>

</>