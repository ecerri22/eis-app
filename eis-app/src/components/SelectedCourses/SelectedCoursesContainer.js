import ContainerHeader from '../ContainerElements/ContainerHeader'
import SelectedCoursesTable from './SelectedCoursesTable'
import { useEffect, useContext } from 'react';

import EisContext from '../context/eis';

function SelectedCoursesContainer() {

  const { getCourses, currentUser} = useContext(EisContext);

  useEffect(() => {
    getCourses(currentUser.idcardnumber);
  }, [currentUser.idcardnumber]);

  return (
    <div>
        <div>
            <ContainerHeader headerTitle={"Selected courses"}/>
        </div>
        <div className='bg-white p-5'>
            <SelectedCoursesTable  />

        </div>
    </div>
  )
}

export default SelectedCoursesContainer