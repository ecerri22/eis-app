import EpokaLogo from '../../img/eis_logo.svg';
import SidebarButton from './SidebarButton';
import { FaRegUser, FaHome, FaBookmark, FaCheck, FaClipboardCheck } from "react-icons/fa";

function Sidebar() {

  const options = [
    { label: "Home", icon: <FaHome className='text-white' size={24}/>, path: "/homepage" },
    { label: "My Profile", icon: <FaRegUser className='text-white' size={24}/>, path: "/my-profile" },
    { label: "Selected Courses", icon: <FaCheck className='text-white' size={24}/>, path: "/selected-courses" },
    { label: "Interim Grades", icon: <FaBookmark className='text-white' size={24}/>, path: "/interim-grades" },
    { label: "Attendance", icon: <FaClipboardCheck className='text-white' size={24}/>, path: "/attendance" },
  ];

  const renderSidebarOptions = options.map((option) => {
    return <SidebarButton 
    key={option.label} 
    optionTitle={option.label} 
    optionIcon={option.icon} 
    to={option.path}
    classes='hover:bg-blue-800'
    />
  })

  return (
    <div className='h-full w-full bg-blue-900'>
        {/* logo */}
        <div className='p-5'> 
          <img src={EpokaLogo} alt="Logo" />
        </div>
        {/* options */}
        <div>
          {renderSidebarOptions}
        </div>
    </div>
  );
}

export default Sidebar;
