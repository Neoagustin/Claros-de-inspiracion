import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

function FloatingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const initialX = window.innerWidth - 80;
    const initialY = window.innerHeight - 300;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.touches[0].clientX - e.target.offsetLeft,
      y: e.touches[0].clientY - e.target.offsetTop
    });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const newX = e.touches[0].clientX - e.target.offsetLeft;
      const newY = e.touches[0].clientY - e.target.offsetTop;

      // Verificar los límites de la ventana del navegador
      const maxX = window.innerWidth - 70;
      const maxY = window.innerHeight - 70;

      // Ajustar la posición si excede los límites
      const adjustedX = Math.max(0, Math.min(newX, maxX));
      const adjustedY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: adjustedX, y: adjustedY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`floating-button ${isDragging ? 'dragging' : ''}`}
      style={{ top: position.y, left: position.x }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Link to="/Cursos">Cursos</Link>
    </div>
  );
}

export default FloatingButton;
