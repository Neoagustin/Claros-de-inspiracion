import React from 'react';
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

      <div className="banner-btn">
        <a onClick={scrollToHistory}>VER MÁS</a>
      </div>
      <video autoPlay loop muted className="banner-video">
      <source src="https://firebasestorage.googleapis.com/v0/b/desperta-a-lo-eterno.appspot.com/o/Banner%20Video%2FVideo%20Banner.mp4?alt=media&token=78a0f78b-5efe-4a8c-bc00-12ee99394025" type="video/mp4" />
      </video>
    </div>
  )
}
