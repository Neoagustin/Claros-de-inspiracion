import React from 'react';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';

import('./app.css')

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

