

import Home from './pages/Home';
// import Button from './Components/Button'
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart'
// import SignInSide from './pages/SignInSide';
// import SignIn from './pages/SignIn';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Button/> */}
     
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          {/* <Route path="/signUp" element={<SignInSide></SignInSide>} /> 
          <Route path="/signIn" element={<SignIn></SignIn>} />  */}
        </Routes>
    </div>
  );
}

export default App;