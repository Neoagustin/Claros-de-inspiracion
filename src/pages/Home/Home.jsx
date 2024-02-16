import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import HistorySection from '../../components/Home/HomeSections/HomeSections';
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
