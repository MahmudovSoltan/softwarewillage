import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Haqqimizda from './components/Pages/Haqqimizda';
import Tedris from './components/Pages/Tedris';
import Karyera from './components/Pages/Karyera';
import Blog from './components/Pages/Blog';
import Header from './components/leyout/Header';
import Home from './components/Pages/Home';
import Footer from './components/leyout/Footer';
import Boootcamp from './components/Pages/Boootcamp';
import About from './components/Pages/About';
import Education from './components/Pages/Education'
import Contact from './components/Pages/Contact'
import Students from './components/Pages/Students'


function App() {
  return (
    <>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="haqqimizda" element={<Haqqimizda />} >
      <Route path='' element ={<About/>}/>
      <Route path='education' element ={<Education/>}/>
      <Route path='contacts' element ={<Contact/>}/>
      <Route path='students' element ={<Students/>}/>
      
      </Route>
      <Route path="tedris" element={<Tedris />} />
      <Route path="karyera" element={<Karyera />} />
      <Route path="blog" element={<Blog />} />
      <Route path='bootcamp' element = {<Boootcamp/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
