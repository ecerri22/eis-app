import InterimGradeSingleCourse from './InterimGradeSingleCourse'

function InterimGradesContainer({ interimGrades }) {

  const renderInterimGradesforeachCourse = interimGrades.map((interimgrades, index) => {
    return <InterimGradeSingleCourse key={index} interimGrades={interimgrades} height={"20rem"} />
  });
  
  return (
    <div className='flex flex-col gap-8'>
        {renderInterimGradesforeachCourse}
    </div>
  )
}

export default InterimGradesContainer;