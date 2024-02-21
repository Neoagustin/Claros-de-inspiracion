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
      <source src="https://firebasestorage.googleapis.com/v0/b/desperta-a-lo-eterno.appspot.com/o/Banner%20Video%2Fbanner-video-new.mp4?alt=media&token=be1ff45d-0112-4e79-add6-6f909305d330" type="video/mp4" />
      </video>
    </div>
  )
}