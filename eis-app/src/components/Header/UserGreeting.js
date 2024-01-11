import { useContext } from "react";
import EisContext from "../context/eis";

function UserGreeting() {
  const  { currentUser } = useContext(EisContext);

  return (
    <p className='text-blue-900 text-lg'>
      Welcome back, {currentUser?.firstname ?? ""}!
    </p>
  );
}

export default UserGreeting;
