import React from 'react';
import { Link } from 'react-router-dom';

export default function ClassItem({ courseId, classId, classTitle }) {

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
      if (isOpen === true) {
         setIsOpen(!isOpen);
      }
   };

   return (
      <Link to={`/CourseClass/${courseId}/${classId}`} onClick={scrollToTop} className='class-container'> {/* Ajusta la ruta */}
         <p>{classTitle}</p>
         <p className='start-title'>Comienza</p>
      </Link>
   );
}
