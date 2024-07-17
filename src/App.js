import './App.css';
import React, { useState } from 'react';
import { IceCreamSection,BrandSlider,Navbar ,ProductSlider,Footer} from './Component_list';
import {default as Amul_Banner} from '../src/Assets/Amul_Banner.png'
function App() {
  const [Brand_check, Set_Brand_check] =useState(false)
  return (
    <div className="App">
      <Navbar Brand_check={Set_Brand_check} />
      <div style={{ display: !Brand_check ? "block" : "none" ,position:"absolute"}}>
        <ProductSlider />
      </div>
      <div style={{ display: Brand_check ? "block" : "none", position: "absolute" }}>
        <BrandSlider />
      </div>
      <div>
        <IceCreamSection />
      </div>
      <img alt='Amul_Banner' src={Amul_Banner} style={{position:"absolute",top:"200vh",left:"0"}}/>
      <div style={{position:"absolute",top:"300vh",height:"max-content"}}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
