

import Home from './pages/Home';

import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import CartDetails from './Components/CartDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <CartDetails/>
     <Routes>
          <Route path="/" element={<Home/>} />
         
        </Routes>
    </div>
  );
}

export default App;