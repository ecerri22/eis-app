import { useContext, useState, useEffect } from 'react';
import InterimGradesTable from './InterimGradesTable'
import ContainerHeader from '../ContainerElements/ContainerHeader'
import EisContext from '../context/eis';
import FinalResults from '../FinalResults';

function InterimGradeSingleCourse({ height, interimGrades, message }) {
  const { currentPath, interimGradesCourse } = useContext(EisContext);

  const [goToTitle, setGoToTitle] = useState([]);
  const [finalResult, setFinalResult] = useState([]);
  const [arrayOfEval, setArrayOfEval] = useState([]);

  useEffect(() => {
    if (currentPath === "/homepage") {
      setArrayOfEval(interimGradesCourse);
    } else {
      setArrayOfEval(interimGrades);
    }
  }, [currentPath, interimGradesCourse, interimGrades, setGoToTitle, setArrayOfEval]);
 
  return (
    <div className='flex flex-col' style={{height: height}}>
      <ContainerHeader headerTitle={goToTitle} path="/interim-grades"/>
      { message !== '' && currentPath === '/homepage' ? (
        <div className='bg-white pt-5 px-5 flex-1 overflow-y-auto'>
          <p className='text-lg text-slate-400 items-center'>{message}</p>
        </div>
      ) : (
        <>
          <div className='bg-white p-5 flex-1 overflow-y-auto'>
            <InterimGradesTable setGoToTitle={setGoToTitle} setFinalResult={setFinalResult}  arrayOfEval={arrayOfEval}/>
          </div>
          <div>
            <FinalResults type='Scaled Average:' finalResult={Math.round(finalResult)}/>
          </div>
        </>
      )

      }
    </div>
  )
}

export default InterimGradeSingleCourse