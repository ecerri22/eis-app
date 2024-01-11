import { useContext } from "react"
import EisContext from "../context/eis"

function UserProfileHeaderName() {

  const {currentUser} = useContext(EisContext);
  
  return (
    <p className='text-blue-900 text-lg'>{currentUser?.firstname + " " + currentUser?.lastname}</p>
  )
}

export default UserProfileHeaderName