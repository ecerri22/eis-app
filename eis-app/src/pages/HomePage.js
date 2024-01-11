import { useState, useEffect, useContext } from 'react';
import CourseContainer from '../components/Courses/CourseContainer';
import AttendanceSingleRecord from '../components/Attendance/AttendanceSingleRecord';
import InterimGradeSingleCourse from '../components/InterimGrades/InterimGradeSingleCourse';
import EisContext from '../components/context/eis';

function HomePage() {
  const { currentUser, getAttendanceCourse, getIntGrades, interimGradesCourse } = useContext(EisContext);

  /*********COURSE CODE**********/
  const [courseCodes, setCourseCodes] = useState('');

  /*********INTERIM GRADES**********/
  useEffect(() => {
    getIntGrades(currentUser.studentidnumber, courseCodes);
  }, [ courseCodes]);

  /***********ATTENDANCE************/
  useEffect(() => {
    getAttendanceCourse(currentUser.studentidnumber, courseCodes);
  }, [ courseCodes]);

  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (interimGradesCourse.length > 10) {
      setMessage('Choose a course');
    } else {
      setMessage(''); 
    }
  }, [interimGradesCourse, message]);
  
  return (
    <div className='flex flex-col h-full px-8 pt-1 gap-5'>
      <div style={{ height: '30%' }}>
        <CourseContainer setCourseCodes={setCourseCodes} />
      </div>

      <div className='flex gap-8'>
        <div className='w-1/2 h-full'>
          <InterimGradeSingleCourse height={'25rem'} message={message} />
        </div>
        <div className='w-1/2 h-full'>
          <AttendanceSingleRecord height={'25rem'} message={message} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
