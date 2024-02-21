import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail({ courses }) {
   const { id } = useParams(); // Obtiene el ID del curso de la URL
   const [course, setCourse] = useState(null);

   useEffect(() => {
      // Busca el curso por ID
      const selectedCourse = courses.find(crse => crse.id === parseInt(id));
      setCourse(selectedCourse);
      
   }, [id, courses]);

   if (!course) {
      return <div>Curso no encontrado</div>;
   }

   return (
      <div>
         <h2>{course.title}</h2>
         <p>{course.description}</p>
         <p>Autor: {course.authorName}</p>
         <p>Fecha: {course.date}</p>
         <div>
            <h3>Clases:</h3>
            {course.classes.map(cls => (
               <div key={cls.id}>
                  <p>{cls.title}</p>
                  <h4>Videos:</h4>
                  <ul>
                     {cls.videos.map(video => (
                        <li key={video.id}>{video.title}</li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
   );
}
