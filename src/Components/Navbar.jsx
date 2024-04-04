import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="hidden md:flex items-center space-x-2 ">
              <a href="/" className="py-5 px-3 text-white text-2xl hover:text-gray-900">Home</a>
              <a href="/genre" className="py-5 px-3 text-white text-2xl  hover:text-gray-900">Genre</a> 
              <a href="/leaderboard" className="py-5 px-3 text-white text-2xl hover:text-gray-900">Leaderboard</a>
              <a href="/dailyquiz" className="py-5 px-3 text-white text-2xl hover:text-gray-900">Daily Quiz</a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/login" className="py-5 px-3 text-2xl text-white ">Login</a>
            <a href="#" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Logout</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mobile-menu hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
      </div> */}
    </nav> 

  );
};

export default Navbar;