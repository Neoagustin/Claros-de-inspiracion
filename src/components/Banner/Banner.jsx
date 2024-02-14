import './Banner.css';
import './BannerResponsive.css';
import videoSource from '../../assets/videos/video-banner.mp4';

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="dark-overlay"></div>
      <div className="banner-text">
        <h1>DESPIERTA A LO ETERNO</h1>
        <p>Ministerio Misionero y Profético </p>
      </div>
      <div className="banner-btn">
        <a href="#">VER MÁS</a>
      </div>
      <video autoPlay loop muted className="banner-video">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  )
}
