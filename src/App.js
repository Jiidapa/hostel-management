import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './page/Home';

function App() {
  return (
    <>
      <NavBar />
      <div className="App-header">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App;
