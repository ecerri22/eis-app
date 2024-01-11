import AttendanceSingleRecord from './AttendanceSingleRecord'

function AttendanceContainer({ attendance }) {
  // now attendance has the value of arrayOfGroups

  const renderAttendanceforeachCourse = attendance.map((attendance, index) => {
    return <AttendanceSingleRecord key={index} attendance={attendance} height={"20rem"} />
  });

  return (
    <div className='flex flex-col gap-8'>
      {renderAttendanceforeachCourse}
    </div>
  )
}

export default AttendanceContainer