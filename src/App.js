import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Project from './pages/gallery/Project';
import NotFound from './pages/not found/NotFound';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className='flex flex-col min-h-svh'>
        <Header />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/project" element={<Navigate to="/gallery" replace />} />
            <Route path="/project/*" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
