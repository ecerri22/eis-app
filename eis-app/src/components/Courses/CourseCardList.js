import CourseCard from './CourseCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext } from 'react';
import EisContext from '../context/eis';

function CourseCardList({ setCourseCodes }) {

  const { courses } = useContext(EisContext);
  
  const renderCards = courses.map(course => (
    <CourseCard key={course.coursecode} course={course} setCourseCodes={setCourseCodes} />
  ));

  // Settings for the carousel
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      {courses.length > 5 ? (
        <Slider {...settings}>{renderCards}</Slider>
      ) : (
        <div className='flex flex-row justify-between	'>{renderCards}</div>
      )}
    </div>
  );
}

export default CourseCardList;
