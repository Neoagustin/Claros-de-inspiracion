import './Banner.css';
import './BannerResponsive.css';
import videoSource from '../../assets/videos/video-banner.mp4';

export default function Banner() {

  const scrollToHistory = () => {
    const historySection = document.getElementById(`history`);
    const yOffset = -50;
    const y = historySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});

 };

  return (
    <div className="banner-container">
      <div className="dark-overlay"></div>
      <div className="banner-text">
        <h1>DESPIERTA A LO ETERNO</h1>
        <p>Ministerio Misionero y Profético </p>
      </div>
      <div className="banner-btn">
        <a onClick={scrollToHistory}>VER MÁS</a>
      </div>
      <video autoPlay loop muted className="banner-video">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  )
}
