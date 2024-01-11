import { useEffect } from 'react';
import { useContext } from 'react';
import EisContext from '../context/eis';

function InterimGradesTable({ setFinalResult, arrayOfEval, setGoToTitle }) {
  const { currentPath } = useContext(EisContext);

  useEffect(() => {
    if (currentPath === "/homepage") {
      setGoToTitle('Interim Grades');
    } else {
      if (arrayOfEval.length > 0) {
        setGoToTitle(arrayOfEval[0].coursecode.trim() + " - " + arrayOfEval[0].coursename);
      }
    }
  }, [currentPath, arrayOfEval, setGoToTitle]);

  const renderTableRows = arrayOfEval?.map((intGrade, index) => {
    return (
      <tr key={index} className='bg-white border-b hover:bg-gray-50 '>
        <td className='p-4'>{intGrade.assignmentname}</td>
        <td className='p-4'>{intGrade.assignmenttype}</td>
        <td className='p-4'>{intGrade.weight}%</td>
        <td className='p-4 font-semibold'>{intGrade.grade} / 100</td>
        <td className='p-4'>{intGrade.date.slice(0, 10)}</td>
      </tr>
    )
  });

  const calculateScaledAverage = (grades) => {
    let weightSum = 0;
    let gradeWeightSum = 0;

    grades.forEach(item => {
      weightSum += item.weight;
      gradeWeightSum += item.grade * item.weight;
    });

    return weightSum === 0 ? 0 : gradeWeightSum / weightSum;
  };

  useEffect(() => {
    const scaledAvg = calculateScaledAverage(arrayOfEval);
    setFinalResult(scaledAvg);
  }, [arrayOfEval, setFinalResult]);

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
            <th className='px-4 py-2'>Name</th>
            <th  className='px-4 py-2'>Type</th>
            <th  className='px-4 py-2'>Weight</th>
            <th className='px-4 py-2'>Grade</th>
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

export default InterimGradesTable;
