import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hakkimizda from './pages/Hakkimizda/Hakkimizda';
import Anasayfa from './pages/Anasayfa/Anasayfa';

function App() {
  return (
    <div className="App">
      <Header />
      
      <div>
        <Route path="/" exact component={Anasayfa} />
        <Route path="/hakkimizda" component={Hakkimizda} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
