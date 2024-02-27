import React from 'react';
import { Link } from 'react-router-dom';

export default function ClassItem({ courseId, classId, classTitle }) {
   return (
      <Link to={`/CourseClass/${courseId}/${classId}`} className='class-container'> {/* Ajusta la ruta */}
         <p>{classTitle}</p>
         <p className='start-title'>Comienza</p>
      </Link>
   );
}
