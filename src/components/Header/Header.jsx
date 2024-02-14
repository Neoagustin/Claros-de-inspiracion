import React, { useState } from 'react';
import './Header.css';
import './HeaderResponsive.css';
import logo from '../../assets/img/logo.png';
import TikTok_icon from '../../assets/icons/TikTok.png'
import instagram_icon from '../../assets/icons/instagram.png'

export default function Header() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
      if (isOpen === true) {
         setIsOpen(!isOpen);
      }
   };

   const scrollToSection = (sectionId) => {
      const historySection = document.getElementById(`${sectionId}`);
      const yOffset = -50;
      const y = historySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});

      setIsOpen(!isOpen);
   };

   return (
      <header>
         <div>
            <img onClick={scrollToTop} src={logo} alt="Logo" title='Claro de Inspiracion Logo' />
         </div>

         <nav className={`nav-header ${isOpen ? 'open' : ''}`}>
            <div className="menu-container">
               <ul>
                  <li><a onClick={scrollToTop} href="#">Inicio</a></li>
                  <li><a onClick={() => scrollToSection("history")} href="#">Historia</a></li>
                  <li><a onClick={() => scrollToSection("mission")} href="#">Misión</a></li>
                  <li><a onClick={() => scrollToSection("vision")} href="#">Visión</a></li>
                  <li><a onClick={() => scrollToSection("values")} href="#">Valores</a></li>
                  <div className='btn-container'>
                     <a href="#" id='btn-cursos-header' className='btn-cursos-header'>Cursos</a>
                     <a href="#" id='btn-ofrendas-header' className='btn-ofrendas-header'>Ofrendas</a>
                  </div>
                  <div className='networks-header-container'>
                     <img id='tiktok-icon' src={TikTok_icon} alt="" />
                     <img id='instagram-icon' src={instagram_icon} alt="" />
                  </div>
               </ul>
            </div>
         </nav>

         <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </header>
   );
}
