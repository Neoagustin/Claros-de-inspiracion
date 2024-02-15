import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Offerings from './pages/Offerings/Offerings'
import Courses from './pages/Courses/Courses'
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ofrendas' element={<Offerings />} />
        <Route path='/Cursos' element={<Courses />} />
      </Routes>
      
      <Footer />
    </>
  )
}
