function CourseCard({ course, setCourseCodes }) {

  const onCourseClick = (courseCode) => {
    setCourseCodes(courseCode);
  }

  return (
    <div onClick={() => onCourseClick(course.coursecode)}>
      <button className='h-32 w-52 flex flex-col text-left text-gray-200 px-5 py-3 rounded-xl shadow-lg shadow-zinc-300 bg-blue-900 hover:opacity-95 mx-3'>
        <p className='text-sm'>{course.coursecode}</p>
        <p className="text-xl uppercase">
          {course.coursename}
        </p>
      </button>
    </div>
  );
}

export default CourseCard;

