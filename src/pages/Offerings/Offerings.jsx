import React from 'react';
import offeringImage from '../../assets/img/ofrendas.jpg';
import './Offerings.css';

export default function Offerings() {
   return (
      <div className='offerings-main-container'>
         <div className='offerings-content'>
            <div className="offerings-text">
               <h1>Ofrendas</h1>
               <p>Buenas! Dios te bendiga, queremos contarte que puedes ser parte de este ministerio y del avance del Reino de los Cielos mediante tus ofrendas.</p>
               <p>Las ofrendas están destinadas a sostener el ministerio financieramente, tanto para el crecimiento y desarrollo de la página web y de los cursos, como también para los viajes misioneros que se realicen, todo ello para bendecir a las Iglesias en distintas partes del mundo.</p>
               <div className="image-container">
                  <img src={offeringImage} alt="Ofrendas" className="offerings-image" />
               </div>
               <p>Puedes ofrendar a través de Mercado Pago si eres de Argentina. Aquí tienes el enlace:</p>
               <a href="https://link.mercadopago.com.ar/ministerioprofetico" target="_blank" rel="noopener noreferrer">link.mercadopago.com.ar/ministerioprofetico</a>
               <p>(Seleccionas el monto y listo)</p>
               <p>En caso de no tener Mercado Pago, puedes ofrendar mediante transferencia al CBU:</p>
               <p id='CBU'>0000007900203802802494</p>
               <p>Si estás en el extranjero, puedes enviar tu ofrenda a través de PayPal, en este enlace:</p>
               <a href="https://www.paypal.me/Despertaraloeterno" target="_blank" rel="noopener noreferrer">paypal.me/Despertaraloeterno</a>
            </div>
         </div>
      </div>
   );
}
