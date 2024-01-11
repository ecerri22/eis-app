import { useContext, useEffect } from "react";
import EisContext from "../context/eis";

function AttendanceTable({ setGoToTitle, setFinalAvg, arrayOfEval}) {
  const { currentPath} = useContext(EisContext);
  
  useEffect(() => {
    if (currentPath === "/homepage") {
      setGoToTitle('Attendance');
    } else {
      if (arrayOfEval.length > 0) {
        setGoToTitle(arrayOfEval[0].coursecode.trim() + " - " + arrayOfEval[0].coursename);
      }
    }
  }, [currentPath, arrayOfEval, setGoToTitle]);

  const renderTableRows = arrayOfEval?.map((attendance, index) => {
    return (
      <tr key={index} className='bg-white border-b hover:bg-gray-50 '>
        <td className='p-4'>Week {attendance.week}</td>
        <td className='p-4'>{attendance.topic}</td>
        <td className='p-4'>{attendance.type}</td>
        <td className='p-4 font-semibold'>{attendance.nrofhoursattended} / {attendance.totalhours} hrs</td>
        <td className='p-4'>{attendance.date.slice(0, 10)}</td>
      </tr>
    )
  });

  const calculateHoursWeightedAverage = (evaluations) => {
    const numberOfRecords = evaluations.length;
    let weightedSum = 0;
  
    evaluations.forEach(item => {
      weightedSum += (item.nrofhoursattended / item.totalhours);
    });
  
    return numberOfRecords === 0 ? 0 : weightedSum / numberOfRecords * 100;
  };
  

  useEffect(() => {
    const avg = calculateHoursWeightedAverage(arrayOfEval);
    setFinalAvg(avg);
  }, [arrayOfEval, setFinalAvg]);


  return (
    <div className='relative h-full overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-200'>
      <table className='w-full text-sm text-left text-gray-500'>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>

        <thead className='text-md text-gray-700 uppercase bg-gray-100 sticky top-0 '>
          <tr>
            <th className='px-4 py-2'>Week</th>
            <th  className='px-4 py-2'>Topic</th>
            <th  className='px-4 py-2'>Type</th>
            <th className='px-4 py-2'>Attended</th>
            <th className='px-4 py-2'>Date</th>
          </tr>
        </thead> 

        <tbody className=' '>
          {renderTableRows}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceTable