import React from 'react';
import { Link } from 'react-router-dom';

export default function ClassItem({ courseId, classId, classTitle }) {

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   };

   return (
      <Link to={`/CourseClass/${courseId}/${classId}`} className='class-container' onClick={scrollToTop}>
         <p>{classTitle}</p>
         <p className='start-title'>Comienza</p>
      </Link>
   );
}
