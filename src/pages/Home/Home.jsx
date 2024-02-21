import React from 'react';
import Banner from './Components/Banner/Banner';
import HistorySection from './Components/HomeSections/HomeSections';
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
