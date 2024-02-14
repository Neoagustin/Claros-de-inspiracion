import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/videos/video-banner.mp4'
import visionImg from '../../assets/img/ia-vision.jpeg'
import valuesImg from '../../assets/img/ia-valores.jpeg'
import './HomeSections.css'
import './HomeSectionsResponsive.css'

export default function HistorySection() {
   useEffect(() => {
      AOS.init({
         duration: 600,
         easing: 'ease-in-out',
         once: true,
      });
   }, []);

   return (
      <div className='home-sections-container'>

         <section className='history-section section-home'>
            <div id='history-main-container' className='main-section-container'>
               <div className='history-text-container'>
                  <h2>HISTORIA</h2>
                  <p>En 2017 orando en el cuarto de madrugada, empiezo a sentir mucha electricidad en mi brazo izquierdo y
                     no paraba, y escucho la voz de Dios diciendome con esta mano vas a sanar enfermos, dar vista a
                     ciegos, sordos van a oir, paraliticos andar y demoños salir fuera. Esto se repitio varias noches. Un dia
                     orando con un hermano, sin contarle nada de esto a nadie, el toma mi brazo izquierdo, lo levanta y
                     mientras mi brazo se llena de electricidad, empieza a decirme con este brazo...todo lo que Dios me dijo
                     en lo secreto.
                     Pasado los años comenze a ver parte del cumplimiento de estas cosas en el ministerio.
                     Comenzando la pandemia en 2020, entre en un tiempo de soledad con Dios (desierto) donde estabamos
                     solo El y yo, ahi El comenzo a hablarme sobre un llamado Misionero y Profetico muy fuerte,
                     confrimandolo nuevamente por medio de otras personas. <br /> <br />
                     Comenzando a orar desde 2020 hasta 2022 con un amigo, cosas sobrenaturales ocurrian en su casa, la
                     gloria de Dios se manifestaba por horas con poder, Dios le da la vision a mi amado amigo Guido Dale,
                     de contruir una casa de Oracion, la que hoy se llama Habitat, de la cual formo parte del misniterio, la
                     cual tiene como vision llevar avivamiento sustentable a la Iglesia.
                     Paralelamente a esto en pandemia, Dios me da una vision muy fuerte donde veo a Jesus volviendo con
                     millares de angeles y un reloj que marcaba las 12 de la noche ( es decir la media noche) y escucho
                     como pocas veces en mi vida la vos tan fuerte y clara de Dios diciendome DESPERTA A MI NOVIA,
                     DESPERTA A MI NOVIA, DESPERTA A MI NOVIA, tres veces seguidas.
                     Comenze a predicar no solo a los que me rodeaban, sino por redes sociales, haciendose viral este
                     mensaje del regreso de Jesus.
                     Iniciado el año 2024 en medio de un ayuno de 2 dias, Dios me habla con Hagueo, donde dice ustedes
                     se han engordado mientras mi casa esta en ruinas. Ahi El Espiritu Santo con mucho amor confronta mi
                     vida y nace este nuevo ministerio con cursos online, para dar a la Iglesia de lo recibido y asi poder
                     edificarla.</p>
               </div>

               <div className='section-video-container'>
                  <video controls controlsList="nodownload" src={video}></video>
                  <a href="#">Leer testimonio completo</a>
               </div>
            </div>
         </section>

         <section className='section-mission section-home' data-aos="fade-right" data-aos-offset="300">
            <div className='main-section-container'>
               <div className='section-video-container'>
                  <video controls controlsList="nodownload" src={video}></video>
               </div>

               <div className='mission-text-container'>
                  <h2>MISIÓN</h2>
                  <ul>
                     <li>Despertar a la Iglesia por medio de un avivamiento</li>
                     <li>Despertar a lo Eterno y Celestial</li>
                     <li>Avivar el Fuego de Dios en los corazones</li>
                     <li>Avivar el celo y el amor por Jesucristo y su Reino</li>
                     <li>Amar el Regreso de Jesus</li>
                     <li>Renovar la mente en una reforma sana, profetica y biblica a la mente de Cristo</li>
                     <li>LLevar a la Iglesia a un estilo de vida de oracion y intimidad con el Padre en el Lugar Secreto</li>
                     <li>Llevar a la Iglesia a un corazon maduro, lleno de humildad y sin prejuicios.</li>
                  </ul>
               </div>
            </div>
         </section>

         <section className='section-vision section-home' data-aos="fade-right" data-aos-offset="300">
            <div className='main-section-container'>
               <div className='vision-text-container'>
                  <h2>VISIÓN</h2>
                  <p>
                     Traer un despertar por medio de un avivamiento sustentable en el tiempo, por medio de la presencia
                     manifiesta del Espíritu Santo y por la Palabra de Dios, consolidando y fortaleciendo a las Iglesias por
                     medio de armas espirituales que ya nos fueron dadas y un plan de acción concreto.
                  </p>
               </div>
               <div className='vision-img-container'>
                  <img src={visionImg} />
               </div>
            </div>
         </section>

         <section className='section-values section-home' data-aos="fade-right" data-aos-offset="300">
            <div className='main-section-container'>
               <div className='values-text-container'>
                  <h2>VALORES</h2>
                  <ul>
                     <li>Creemos en Jesucristo como Hijo de Dios y como Dios mismo.</li>
                     <li>Creemos que Dios es Uno, Padre, Hijo y Espíritu Santo.</li>
                     <li>Creemos en la Vida Eterna y resurrección de los muertos.</li>
                     <li>Creemos en que Jesús vuelve pronto a Reinar.</li>
                     <li>Creemos en El Cielo y en el infierno.</li>
                     <li>Creemos que la Iglesia es una.</li>
                     <li>Creemos que la salvación es por gracia, 100% mérito de Cristo Jesús y no de hombres.</li>
                     <li>Creemos que la Biblia es inspirada por Dios y es Palabra de Dios.</li>
                     <li>Buscamos el amor a Dios y a las personas sobre todas las cosas.</li>
                     <li>Evangelizar predicando el Evangelio con hechos y con palabras.</li>
                     <li>Vivir una vida sencilla amando a la gente, haciendo y deseando el bien a los demás, con un estilo de vida profundo de devoción a Dios.</li>
                     <li>No negociamos la única verdad frente a tanto engaño; Jesucristo es el Único Dios verdadero.</li>
                  </ul>
               </div>
               <div className='values-img-container'>
                  <img src={valuesImg} />
               </div>
            </div>
         </section>

         <div className='invitations-Container' data-aos="fade-right" data-aos-offset="100">
            <p>INGRESÁ A NUESTROS CURSOS AHORA</p>
            <a>Cursos</a>
         </div>

         <div className='invitations-Container' data-aos="fade-right" data-aos-offset="100">
            <p>PODÉS OFRENDAR</p>
            <a id='btn-ofrendar'>Ofrendar</a>
         </div>
      </div>
   )
}
