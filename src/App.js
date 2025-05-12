import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Products from './Products/Products';
import Contact from './contact/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Home />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;