
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import React, { useState } from 'react';

// const Header = () => {
//   const { currentUser, logout } = useAuth();
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = () => {

//     console.log('Searching for:', searchQuery);
//   };

//   return (
//     <header className="bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] shadow-lg">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-3xl font-bold text-white hover:text-primary transition-all duration-300 ease-in-out">
//           TravelEase
//         </Link>

//         <div className="w-full max-w-md hidden md:block">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
//             placeholder="Search destinations..."
//             className="w-full px-4 py-2 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md"
//             aria-label="Search destinations"
//           />
//         </div>

//         <div className="flex items-center space-x-6">
//           {currentUser ? (
//             <>
//               <Link to="bookings" className="text-white hover:text-primary flex items-center transition-all duration-300 ease-in-out">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                 </svg>
//                 <span className="ml-1">My Bookings</span>
//               </Link>
//               <button
//                 onClick={logout}
//                 className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md"
//                 aria-label="Logout"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="login" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md" aria-label="Login">
//               Login
//             </Link>
//           )}
//         </div>

//         <div className="flex items-center space-x-4">
//           <a href="https://travel-admin-silk.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-all duration-300 ease-in-out">
//             Want to list your property?
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log('Searching for:', searchQuery);
    // Optional: Navigate to search results
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-wrap gap-y-4">
        <Link
          to="/"
          className="text-3xl font-bold text-white hover:text-primary transition-all duration-300 ease-in-out"
        >
          TravelEase
        </Link>

        {/* Search Input */}
        <div className="w-full max-w-md hidden md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search destinations..."
            className="w-full px-4 py-2 rounded-full border border-transparent bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md"
            aria-label="Search destinations"
          />
        </div>

        {/* User Links */}
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <Link
                to="/bookings"
                className="text-white hover:text-primary flex items-center transition-all duration-300 ease-in-out"
              >
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                My Bookings
              </Link>
              <button
                onClick={logout}
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md"
              aria-label="Login"
            >
              Login
            </Link>
          )}
        </div>

        {/* Partner Link */}
        <div className="flex items-center space-x-4">
          <a
            href="https://travel-admin-silk.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-all duration-300 ease-in-out"
          >
            Want to list your property?
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
