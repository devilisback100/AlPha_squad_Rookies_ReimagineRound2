import './App.css';
import React,{useState} from 'react';
import { Navbar,BrandSlider } from './Component_list';
function App() {
  const [Brand_check, Set_Brand_check] =useState(false)
  return (
    <div className="App">
      <Navbar Brand_check={Set_Brand_check} />
      {Brand_check && <BrandSlider />}
      
    </div>
  );
}

export default App;
