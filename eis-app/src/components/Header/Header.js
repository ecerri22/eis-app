import { useState, useContext } from 'react';
import UserGreeting from './UserGreeting';
import UserProfileHeader from './UserProfileHeader.js';
import EisContext from '../context/eis.js';

function Header() {
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
  const {navigation, removeDataFromStorage} = useContext(EisContext);

  const toggleLogoutDropdown = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
  };

  const handleLogout = () => {
    setShowLogoutDropdown(false);
    navigation("/");
    removeDataFromStorage();
  };

  return (
    <nav className='flex flex-row px-5 border-b-2 border-blue-900 justify-between h-16 w-full z-100 items-center'>
      <div className="flex-grow">
        <UserGreeting />
      </div>
      <div className='relative'>
        <button onClick={toggleLogoutDropdown}>
          <UserProfileHeader />
        </button>
        {showLogoutDropdown && (
          <div className='absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg'>
            <button onClick={handleLogout} className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left'>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
