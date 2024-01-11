import { useContext, useState, useEffect } from 'react';
import ContainerHeader from '../ContainerElements/ContainerHeader';
import AttendanceTable from './AttendanceTable';
import EisContext from "../context/eis";
import FinalResults from '../FinalResults';

function AttendanceSingleRecord({ height, attendance, message }) {
  const { currentPath, attendanceCourse } = useContext(EisContext);

  const [goToTitle, setGoToTitle] = useState([]);
  const [finalAvg, setFinalAvg] = useState([]);
  const [arrayOfEval, setArrayOfEval] = useState([]);

  useEffect(() => {
    if (currentPath === "/homepage") {
      setArrayOfEval(attendanceCourse);
    } else {
      setArrayOfEval(attendance);
    }
  }, [currentPath, attendanceCourse, attendance, setGoToTitle, setArrayOfEval]);

  return (
    <div className='flex flex-col' style={{ height: height }}>
      <ContainerHeader headerTitle={goToTitle} path="/attendance" />
      {message !== '' && currentPath === '/homepage' ? (
        <div className='bg-white pt-5 px-5 flex-1 overflow-y-auto'>
          <p className='text-lg text-slate-400 items-center'>{message}</p>
        </div>
      ) : (
        <>
          <div className='bg-white pt-5 px-5 flex-1 overflow-y-auto'>
            <AttendanceTable setGoToTitle={setGoToTitle} setFinalAvg={setFinalAvg} arrayOfEval={arrayOfEval} />
          </div>
          <div>
            <FinalResults type='Attended:' finalAvg={Math.round(finalAvg)} />
          </div>
        </>
      )}
    </div>
  );
}

export default AttendanceSingleRecord;
