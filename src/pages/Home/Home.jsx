import React from 'react';
import './Home.css';
import './HomeResponsive.css';
import Banner from '../../components/Banner/Banner';
import HistorySection from '../../components/HomeSections/HomeSections';

export default function Home() {
  return (
    <>
      <main className='main-home'>
        <Banner />
        <HistorySection />
      </main>
    </>
  )
}
