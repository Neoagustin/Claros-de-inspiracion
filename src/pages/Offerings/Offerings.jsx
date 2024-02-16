import React from 'react';
import offeringImage from '../../assets/img/ofrendas.jpg';
import offeringImageMP from '../../assets/img/ofrendas-MP.jpg'
import './Offerings.css';

export default function Offerings() {
   return (
      <div className='offerings-main-container'>
         <div className='offerings-content'>
            <div className="offerings-text">
               <h1>Ofrendas</h1>
               <p>Buenas! Dios te bendiga, queremos contarte que podés ser parte de este ministerio y del avance del Reino de los Cielos mediante tus ofrendas.</p>
               <p>Las ofrendas están destinadas a sostener el ministerio financieramente, tanto para el crecimiento y desarrollo de la página web y de los cursos, como también para los viajes misioneros que se realicen, todo ello para bendecir a las Iglesias en distintas partes del mundo.</p>
               <div className="image-container">
                  <img src={offeringImage} alt="Ofrendas" className="offerings-image" />
               </div>
               <p>Podés ofrendar a través de Mercado Pago si sos de Argentina. acá te dejamos el link:</p>
               <a href="https://link.mercadopago.com.ar/ministerioprofetico" target="_blank" rel="noopener noreferrer">link.mercadopago.com.ar/ministerioprofetico</a>
               <p>(Seleccionas el monto y listo)</p>
               <p>En caso de no tener Mercado Pago, podés ofrendar mediante transferencia al CBU:</p>
               <img src={offeringImageMP} alt="Mercado Pago" className="offerings-image-MP" />
               <p id='CBU'>0000007900203802802494</p>
               <p>Si estás en el extranjero, podés enviar tu ofrenda a través de PayPal, en este enlace:</p>
               <a href="https://www.paypal.me/Despertaraloeterno" target="_blank" rel="noopener noreferrer">paypal.me/Despertaraloeterno</a>
            </div>
         </div>
      </div>
   );
}
