import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Header />
        <div className="beastLayout">
        <Main />
        </div>
        <Footer />
    </>
  );
}

export default App;