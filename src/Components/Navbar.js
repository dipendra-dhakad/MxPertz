// import { FaShoppingCart } from 'react-icons/fa';
import { FcShop } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPage } from '../redux/slices/pageSlice';


const Navbar = () => {
  const { Cart } = useSelector((state) => state);
    const dispatch = useDispatch();
  const handlecbutton= ()=>{
    dispatch(setPage('Cart'))
  }
  const handlesbutton= ()=>{
    dispatch(setPage('Shop'))
  }
  return (
    <div>
       <div className=" bg-blue-700 text-black  m-3 rounded-md">
      <nav className="flex justify-around items-center px-4 py-2 h-[100px]">
        <div>
          <Link to="/" onClick={handlesbutton} className="text-3xl font-bold">Home</Link>
        </div>
        <div className="flex gap-7">
          <Link to="/" onClick={handlesbutton} className="text-xl hover:text-gray-400 ">Genre</Link>
          <Link to="/cart" onClick={handlecbutton} className="text-xl hover:text-gray-400 ">Leader Board</Link>
          <Link to="/cart" onClick={handlecbutton} className="text-xl hover:text-gray-400 ">Daily Quiz</Link>
         
          
        </div>
        <div className="flex gap-5">
          <Link to="/signup" className="hover:text-gray-400 text-3xl">Logout</Link>
        
        </div>
      </nav>

     
    </div>

    <nav>
      <div className="flex gap-7 border rounded-md border-black">
      <Link to="/" className="hover:text-gray-400 text-3xl"><span> <FcShop />Advanture</span></Link>
      <Link to="/" className="hover:text-gray-400 text-3xl"><FcShop />Fantsay</Link>
      <Link to="/" className="hover:text-gray-400 text-3xl"><FcShop />Mystrey</Link>
      <Link to="/" className="hover:text-gray-400 text-3xl"><FcShop />Science</Link>
      <Link to="/" className="hover:text-gray-400 text-3xl"><FcShop />History</Link>
      <Link to="/" className="hover:text-gray-400 text-3xl"><FcShop />Sports</Link>
         
          
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;