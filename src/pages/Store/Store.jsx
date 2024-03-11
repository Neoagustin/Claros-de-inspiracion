import img from '../../assets/img/imgs-store/buzo-jesus-negro.png'
import './Store.css';
import './StoreResponsive.css';

export default function Store() {
   return (
      <div className='store-desktop'>
         <div className='store-container'>
            <h1>Nuestros Diseños</h1>
            <p>Podés ver y encargar tu prenda a través de nuestro Instagram: <a href="#">Instagram.com</a></p>

            <section className='store-cards-section'>
               <h3>BUZOS</h3>
               <div className='store-cards-container'>
                  <a>
                     <img src={img} alt="" />
                  </a>
                  <a>
                     <img src={img} alt="" />
                  </a>
                  <a>
                     <img src={img} alt="" />
                  </a>
               </div>

               <h3>REMERAS</h3>
               <div className='store-cards-container'>
                  <a>
                     <img src={img} alt="" />
                  </a>
                  <a>
                     <img src={img} alt="" />
                  </a>
                  <a>
                     <img src={img} alt="" />
                  </a>
               </div>
            </section>
         </div>
      </div>
   )
}
