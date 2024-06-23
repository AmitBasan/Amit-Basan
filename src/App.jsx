
import React from 'react';
import './index.css';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import Experience from './Component/Experience/Experience';
import About from './Component/About me/About';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Myproject from './Component/My Projects/Myproject';
import Footer from './Component/Footer/footer';

const App=() => {
  return (
    <>
 
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Myproject/>

      <Contact/>
      
      <Footer/>
     

      
        
    </>
  );
}

export default App;
