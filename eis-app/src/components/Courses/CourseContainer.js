import ContainerHeaderTitle from '../ContainerElements/ContainerHeaderTitle'
import ContainerHeaderButton from '../ContainerElements/ContainerHeaderButton'
import CourseCardList from './CourseCardList'
import { useEffect, useContext } from 'react';
import EisContext from '../context/eis';

function CourseContainer({setCourseCodes, }) {
  const { getCourses, currentUser} = useContext(EisContext);
  
  useEffect(() => {
    getCourses(currentUser.studentidnumber);
  }, [currentUser.studentidnumber]);


  return (
    <div className='pb-5'>
      {/* CONTAINER HEADER */}
      <div className='flex flex-row justify-between py-3 rounded-t-xl'>
        <div>
          <ContainerHeaderTitle txtcol='#1e3a8a' headerTitle={"Courses"}/>
        </div>
        <div>
          <ContainerHeaderButton txtcol='#1e3a8a' path='/selected-courses'/>
        </div>
    </div>
      {/* CONTAINER CONTENT */}
      <div className='px-3'>
        <CourseCardList setCourseCodes={setCourseCodes}/>
      </div>
    </div>
  )
}

export default CourseContainer