import React from 'react'
import TikTok_icon from '../../assets/icons/TikTok.png'
import instagram_icon from '../../assets/icons/instagram.png'
import './Footer.css'
import './FooterResponsive.css'

export default function Footer() {
   return (
      <footer>
         <div className='main-footer-container'>
            <div className='networks-footer-container'>
               <h3>Seguinos</h3>
               <ul>
                  <li><a href="https://www.tiktok.com/@sebastianancona?_t=8jsylBLPDKH&_r=1" target='_blank'>
                     <img id='tiktok-icon' src={TikTok_icon} alt="" />
                  </a></li>
                  <li><a href="https://www.instagram.com/sebastianancona?igsh=d3Q5MTV1anI3Mmpm" target='_blank'>
                     <img id='instagram-icon' src={instagram_icon} alt="" />
                  </a></li>
               </ul>
            </div>
            <div className='training-footer-container'>
               <h3>Mi Formación Profesional en Ministerios</h3>
               <ul>
                  <li><a href="https://emubaonline.com/">Emubaonline.com</a></li>
                  <li><a href="https://www.escuelasobrenatural.com/">Escuelasobrenatural.com</a></li>
                  <li><a href="https://misioninstituto.com/">misioninstituto.com</a></li>
                  <li><a href="https://fcmonline.com.ar/">fcmonline.com</a></li>
               </ul>
            </div>
            <div className='otherMinistries-footer-container'>
               <h3>Ministerio Habitat</h3>
               <a href="https://www.habitatco.org/">habitatco.org</a>
            </div>
         </div>
         <p class='copyright'>&copy; Claros de inspiración 2024</p>
      </footer>
   )
}
