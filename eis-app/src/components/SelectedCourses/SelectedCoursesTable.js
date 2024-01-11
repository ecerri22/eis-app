import { useContext } from "react"
import EisContext from "../context/eis"

function SelectedCoursesTable() {
  const { courses } = useContext(EisContext);

  const renderTableRows = courses?.map((course) => (
    <tr className='bg-white border-b hover:bg-gray-50 ' key={course.coursecode}>
      <td className='p-4'>{course.coursecode}</td>
      <td className='p-4'>{course.coursename}</td>
      <td className='p-4'>{course.credits}</td>
      <td className='p-4'>{course.ects}</td>
      <td className='p-4'>{course.firstname + " " + course.lastname}</td>
      <td className='p-4'>{course.coursetype}</td>
    </tr>
  ))

  return (
    <div className='relative overflow-x-auto shadow-sm   '>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>

        <thead className='text-md  text-gray-700 uppercase bg-gray-100'>
          <tr>
            <th className='px-4 py-2'>Code</th>
            <th  className='px-4 py-2'>Name</th>
            <th  className='px-4 py-2'>Credits</th>
            <th className='px-4 py-2'>ECTS</th>
            <th className='px-4 py-2'>Lecturer</th>
            <th className='px-4 py-2'>Type</th>
          </tr>
        </thead> 
        <tbody>
          {renderTableRows}
        </tbody>
      </table>
    </div>
  )
}

export default SelectedCoursesTable