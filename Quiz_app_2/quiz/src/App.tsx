import React from 'react';

import './App.css';

import { Navbar } from './components/Navbar';
import { QuizOne } from './pages/QuizOne';
import { QuizTwo } from './pages/QuizTwo';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='quiz1' element={<QuizOne/>}/>
          <Route path='quiz2' element={<QuizTwo/>}/>
        </Routes>

      </div>
     
    </div>
  );
}

export default App;
