import React from 'react';
import './Home.css';
import './HomeResponsive.css';
import Banner from '../../components/Banner/Banner';
import FireSound from '../../components/FireSound/FireSound';
import HistorySection from '../../components/HomeSections/HomeSections';

export default function Home() {
  return (
    <>
      <main className='main-home'>
        <Banner />
        <FireSound />
        <HistorySection />
      </main>
    </>
  )
}
