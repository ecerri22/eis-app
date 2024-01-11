import { useContext } from 'react';
import EisContext from '../context/eis';

function ContainerHeaderButton({ txtcol, path }) {
  const titleStyle = {
    color: txtcol || 'white', 
  };

  const { navigation } = useContext(EisContext);

  const handleClick = (path) => {
    navigation(path);
  }

  return (
    <button className='text-md hover:opacity-80' style={titleStyle} onClick={() => handleClick(path)}>See all</button>
  )
}

export default ContainerHeaderButton