
import './App.css';
import Navbar from './Component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Videos from "./Component/Videos"
import Home from "./Component/Home"
import { useState } from 'react';


function App() {

  const [sidebar,setSidebar]=useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
          <Route path="/" element={<Home sidebar={sidebar}/>}/>
          <Route path="/videos/:categoryId/:videoId" element={<Videos/>}/>
      </Routes>
    </>
  );
}

export default App;
