import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import HistorySection from '../../components/Home/HomeSections/HomeSections';

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
