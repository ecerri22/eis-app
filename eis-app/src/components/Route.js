import { useContext } from 'react';
import EisContext from "./context/eis"

function Route({path, children}) {
  const {currentPath} = useContext(EisContext);

  if(currentPath === path) {
    return children;
  }

  return null;
}

export default Route;