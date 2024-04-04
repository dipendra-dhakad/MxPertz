import React from 'react'
import { Link } from 'react-router-dom'
import { FcShop } from "react-icons/fc";
import { GiMaterialsScience } from "react-icons/gi";
// import { setPage } from '../redux/slices/pageSlice';
import { MdHistoryEdu } from "react-icons/md";
import { MdOutlineSportsHandball } from "react-icons/md";
import { FaFantasyFlightGames } from "react-icons/fa6";
import { GiLevelFourAdvanced } from "react-icons/gi";
const Category = () => {
  return (

    
    <div className='w-full mt-2 p-2'> 
    <nav>
     <div className="flex gap-7 border rounded-md border-black justify-around p-3">
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



<div className='flex  justify-evenly items-center'>
<h1 className='font-bold flex-grow text-5xl ml-5 p-2'>Science Fiction Stories</h1>
<div className='flex justify-evenly mt-2'>
  <button className='ml-auto mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>Clear All</button>
  <button className='mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>Completed</button>
  <button className='mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>In Progress</button>
  <button className='border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>New</button>
</div>

</div>
 

</div>

  )
}

export default Category