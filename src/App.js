import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import { useEffect } from "react";


import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import fotoContext from "./Context";

export default function App() {

  const [fotografias, setFotografias] = useState([]);
  const [fotosFav, setFotosFav] = useState([]);
  const estadoGlobal = {fotografias, setFotografias, fotosFav, setFotosFav};

  

  const getFotografias = async () => {
    const endpoint = "/fotos.json"; 
    const response = await fetch(endpoint);
    const baseFotos = await response.json();
    setFotografias(baseFotos.photos);
    console.log(fotografias)
    console.log(favoritos)
  }

  useEffect(() => {
    getFotografias()
  }, []);


  

  return (
    <div className="App">
      <fotoContext.Provider value={estadoGlobal}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </fotoContext.Provider>
      
    </div>
  );
}
