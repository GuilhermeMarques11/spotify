import React from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import SingleArtist from './pages/SingleArtist';
import Songs from './pages/Songs';
import SingleSong from './pages/SingleSong';
import ScrollTop from './hooks/ScrollTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<SingleArtist />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/song/:id' element={<SingleSong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
