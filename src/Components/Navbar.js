// import { FaShoppingCart } from 'react-icons/fa';
import { FcShop } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiMaterialsScience } from "react-icons/gi";
import { setPage } from '../redux/slices/pageSlice';
import { MdHistoryEdu } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";


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
     

<div className="flex gap-7 border rounded-md border-black justify-around">
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <GiLevelFourAdvanced className="mr-1" />
        <span>Advanture</span>
      </Link>
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <FaFantasyFlightGames className="mr-1" />
        <span>Fantasy</span>
      </Link>
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <FcShop className="mr-1" />
        <span>Mystery</span>
      </Link>
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <GiMaterialsScience className="mr-1" />
        <span>Science</span>
      </Link>
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <MdHistoryEdu className="mr-1" />
        <span>History</span>
      </Link>
      <Link to="/" className="hover:text-gray-400 text-3xl flex items-center">
        <MdOutlineSportsHandball className="mr-1" />
        <span>Sports</span>
      </Link>
    </div>
      </nav>
    </div>
    
  );
};

export default Navbar;