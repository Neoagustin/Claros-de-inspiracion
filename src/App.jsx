import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

