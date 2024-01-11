import { useEffect, useState } from 'react';

function FinalResults({ type, finalResult, finalAvg}) {

  console.log(finalAvg);
  
  const [gradeCol, setGradeCol] = useState('');

  const checkGradeColor = (result) => {
    let colorClass = '';
    
    if (result <= 59) {
      colorClass = 'bg-red-500';
    } else if (result <= 69) {
      colorClass = 'bg-orange-300';
    } else if (result <= 84) {
      colorClass = 'bg-blue-400';
    } else {
      colorClass = 'bg-green-500';
    }
    
    setGradeCol(colorClass);
  };
  
  useEffect(() => {
    checkGradeColor(finalResult);
  }, [finalResult]);

  return (
    <div className='bg-blue-900 flex items-center justify-end px-5 py-1 text-lg text-white'>
      <p className='px-2'>{type}</p>
      {type === 'Attended:' ? (
        <span className={`px-1 py-0.5 ${gradeCol}`}>{finalAvg}%</span>
      ) : (
        <>
          <span className={`px-1 py-0.5 ${gradeCol}`}>{finalResult}</span>
          <p className='px-2'>/ 100</p>
        </>
      )}
    </div>
  );
}

export default FinalResults;
