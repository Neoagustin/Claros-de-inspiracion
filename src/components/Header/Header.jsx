import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
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

   const handleScrollToSection = (sectionId) => {
      const historySection = document.getElementById(`${sectionId}`);
      const yOffset = -50;
      const y = historySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

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
                  <li><Link to="/" onClick={scrollToTop}>Inicio</Link></li>
                  <li><NavLink to="/" onClick={() => handleScrollToSection("history")}>Historia</NavLink></li>
                  <li><NavLink to="/" onClick={() => handleScrollToSection("mission")}>Misión</NavLink></li>
                  <li><NavLink to="/" onClick={() => handleScrollToSection("vision")}>Visión</NavLink></li>
                  <li><NavLink to="/" onClick={() => handleScrollToSection("values")}>Valores</NavLink></li>
                  <div className='btn-container'>
                     <Link to="/Cursos" id='btn-cursos-header' className='btn-cursos-header'>Cursos</Link>
                     <Link to="/Ofrendas" id='btn-ofrendas-header' className='btn-ofrendas-header'>Ofrendas</Link>
                  </div>
                  <div className='networks-header-container' target='_blank'>
                     <a href="https://www.tiktok.com/@sebastianancona?_t=8jsylBLPDKH&_r=1">
                        <img id='tiktok-icon' src={TikTok_icon} />
                     </a>
                     <a href="https://www.instagram.com/sebastianancona?igsh=d3Q5MTV1anI3Mmpm" target='_blank'>
                        <img id='instagram-icon' src={instagram_icon} />
                     </a>
                  </div>
                  <Outlet />
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
