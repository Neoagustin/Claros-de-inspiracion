import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

function FloatingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Calculamos la posición inicial cuando se monta el componente
    const initialX = window.innerWidth - 150; // Ajusta el valor según sea necesario
    const initialY = window.innerHeight - 100; // Ajusta el valor según sea necesario
    setPosition({ x: initialX, y: initialY });
  }, []); // El segundo argumento de useEffect asegura que se ejecute solo una vez al montar el componente

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.touches[0].clientX - e.target.offsetLeft,
      y: e.touches[0].clientY - e.target.offsetTop
    });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.touches[0].clientX - e.target.offsetLeft,
        y: e.touches[0].clientY - e.target.offsetTop
      });
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
