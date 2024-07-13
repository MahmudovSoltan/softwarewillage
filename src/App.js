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


function App() {
  return (
    <>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="haqqimizda" element={<Haqqimizda />} />
      <Route path="tedris" element={<Tedris />} />
      <Route path="karyera" element={<Karyera />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
