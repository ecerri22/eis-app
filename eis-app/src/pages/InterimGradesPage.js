import { useContext, useEffect } from 'react'
import InterimGradesContainer from '../components/InterimGrades/InterimGradesContainer'
import EisContext from '../components/context/eis';

function InterimGradesPage() {

  const {interimGrades, getAllInterimGrades, currentUser} = useContext(EisContext);

  useEffect(()=> {
    getAllInterimGrades(currentUser.studentidnumber)
  }, [currentUser.studentidnumber])


  const groupedByCourse = interimGrades.reduce((acc, obj) => {
    const { coursecode } = obj;
  
    if (!acc[coursecode]) {
      acc[coursecode] = [];
    }
  
    acc[coursecode].push(obj);
    return acc;
  }, {});
  
  const arrayOfGroups = Object.values(groupedByCourse);

  return (
    <div className='flex flex-col h-fit p-8 '>
        <InterimGradesContainer interimGrades={arrayOfGroups} />
    </div>
  )
}

export default InterimGradesPage