import { useContext, useEffect } from 'react';
import AttendanceContainer from '../components/Attendance/AttendanceContainer'
import EisContext from '../components/context/eis';

function AttendancePage() {
  
  const { attendance, getAttendances, currentUser } = useContext(EisContext);

  useEffect(()=> {
    getAttendances(currentUser.studentidnumber)
  }, [currentUser.studentidnumber])

  const groupedByCourse = attendance.reduce((acc, obj) => {
    const { coursecode } = obj;
  
    if (!acc[coursecode]) {
      acc[coursecode] = [];
    }
  
    acc[coursecode].push(obj);
    return acc;
  }, {});
  
  const arrayOfGroups = Object.values(groupedByCourse);
  
  return (
    <div className='flex flex-col h-fit p-8'>
        <AttendanceContainer attendance={arrayOfGroups}/>
    </div>
  )
}

export default AttendancePage