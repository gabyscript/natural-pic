import "../assets/css/galeria.css";

import { useState } from "react";
import { useContext } from "react";

import myContext from '../Context';

import Heart from "./Heart";

export default function Home() {


  const {fotosFav, setFotosFav} = useContext(myContext);

  const {fotografias, setFotografias} = useContext(myContext)

  

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotografias.map((fotoInd,i) => 
      <div
        onClick={() => setFotosFav([...fotosFav, {name: `${fotoInd.alt}`, portrait:`${fotoInd.src.portrait}` }])}
        key={i} className="foto" 
        style={{backgroundImage : `url(${fotoInd.src.portrait})`}}>

        <Heart filled={fotoInd.liked}/>

        <h5>{fotoInd.alt}</h5>
      </div>)}
    </div>
  );
}
