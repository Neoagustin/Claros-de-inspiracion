import './Banner.css';
import './BannerResponsive.css';

export default function Banner() {

  const scrollToHistory = () => {
    const historySection = document.getElementById(`history`);
    const yOffset = -50;
    const y = historySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });

  };

  return (
    <div className="banner-container">
      <div className="dark-overlay"></div>
      <div className="banner-text">
        <h1>DESPERTÁ A LO ETERNO</h1>
        <p>Ministerio Misionero y Profético </p>
      </div>
      <div className="banner-text-leyenda">
        <p>Pero hay alguien que viene después de mí, y que es más poderoso que yo. Él los bautizará con el Espíritu Santo y con fuego. ¡Yo ni siquiera merezco ser su esclavo!</p>
        <p id='versiculo-leyenda'>Mateo 3:11</p>
      </div>
      <div className="banner-btn">
        <a onClick={scrollToHistory}>VER MÁS</a>
      </div>
      <video autoPlay loop muted className="banner-video">
      <source src="https://firebasestorage.googleapis.com/v0/b/claros-de-inspiracion.appspot.com/o/Banner%20Video%2Fbanner-video-new.mp4?alt=media&token=87dd241d-a8d8-46a6-a54e-08ebce3e3337" type="video/mp4" />
      </video>
    </div>
  )
}
