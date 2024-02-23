import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseClass({ courses }) {
   const { id } = useParams();

   let clase = null; 

   courses.forEach(course => {
      const claseEncontrada = course.classes.find(cls => cls.id === parseInt(id));
      if (claseEncontrada) {
         clase = claseEncontrada;
         return;
      }
   });

   return (
      <div>
         <h1>{clase.title}</h1>
         <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
         ></iframe>
      </div>
   );
}
