import { useContext } from 'react';
import classNames from 'classnames';
import EisContext from '../context/eis';

function SidebarButton({ optionTitle, optionIcon, to, className }) {
  const { currentPath, navigation } = useContext(EisContext);

  const isActive = currentPath === to;

  const buttonClasses = classNames(className, {
    'custom-active-color': isActive,
  });

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigation(to);
  };

  return (
    <div className={buttonClasses}>
      <a onClick={handleClick} href={to}>
        <button className='flex flex-row items-center gap-5 pb-3 pt-5 pl-5'>
          {optionIcon}
          <p className='text-white text-lg'>{optionTitle}</p>
        </button>
      </a>
    </div>
  );
}

export default SidebarButton;
