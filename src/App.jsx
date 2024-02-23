import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Offerings from './pages/Offerings/Offerings'
import Courses from './pages/Courses/CoursesPage'
import CourseDetail from './pages/Courses/Components/CourseDetail/CourseDetail';
import Testimonials from './pages/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';
import CoursesData from './pages/Courses/Components/CoursesData'
import CourseClass from './pages/Courses/Components/CourseClass/CourseClass';

export default function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ofrendas' element={<Offerings />} />
        <Route path='/Cursos' element={<Courses courses={CoursesData} />} />
        <Route path='/Testimonios' element={<Testimonials />} />
        <Route path='/curso/:id' element={<CourseDetail courses={CoursesData} />} />
        <Route path='/CourseClass/:id' element={<CourseClass courses={CoursesData} />} />
      </Routes>

      <Footer />
    </>
  )
}
