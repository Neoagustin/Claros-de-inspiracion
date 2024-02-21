import React from 'react';
import Banner from './components/Banner/Banner';
import HistorySection from './components/HomeSections/HomeSections';
import './Home.css'

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
