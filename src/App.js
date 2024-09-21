import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menwear from './pages/Menwear';
import Womenwear from './pages/Womenwear';
import Itempage from "./pages/Itempage";
import Login from "./pages/Login";
import Orderpage from "./pages/Orderpage";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Error from "./pages/Error"
import ResetPassword from "./pages/Resetpassword";
import VerifyOtp from "./pages/Verifyotp";
import Signup from "./pages/Signup";



function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/mens-wear" element={<Menwear/>}/>
          <Route path="/women-wear" element={<Womenwear/>}/>
          <Route path="/item/:id" element={<Itempage/>}/>
          <Route path="/order" element={<Orderpage/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/cancel" element={<Cancel/>}/>
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/*" element={<Error/>}/> 
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
