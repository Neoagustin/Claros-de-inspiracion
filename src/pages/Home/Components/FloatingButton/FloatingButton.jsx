import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

function FloatingButton() {
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [dragging, setDragging] = useState(false);

   const handleMouseDown = (event) => {
      event.stopPropagation();
      setDragging(true);
      const offsetX = event.clientX - position.x;
      const offsetY = event.clientY - position.y;
      const handleMouseMove = (event) => {
         setPosition({
            x: event.clientX - offsetX,
            y: event.clientY - offsetY
         });
      };
      const handleMouseUp = () => {
         setDragging(false);
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mouseup', handleMouseUp);
      };
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
   };

   const handleTouchStart = (event) => {
      event.stopPropagation();
      const touch = event.touches[0];
      const offsetX = touch.clientX - position.x;
      const offsetY = touch.clientY - position.y;
      const handleTouchMove = (event) => {
         event.preventDefault();
         const touch = event.touches[0];
         setPosition({
            x: touch.clientX - offsetX,
            y: touch.clientY - offsetY
         });
      };
      const handleTouchEnd = () => {
         window.removeEventListener('touchmove', handleTouchMove);
         window.removeEventListener('touchend', handleTouchEnd);
      };
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
   };

   return (
      <div
         className={`floating-button ${dragging ? 'dragging' : ''}`}
         style={{ left: position.x, top: position.y }}
         onMouseDown={handleMouseDown}
         onTouchStart={handleTouchStart}
      >
         <Link to="/Cursos">Cursos</Link>
      </div>
   );
}

export default FloatingButton;
