import { useContext } from "react";

import myContext from '../Context';

export default function Favoritos() {
  
  const {fotosFav, setFotosFav} = useContext(myContext);

  const {fotografias, setFotografias} = useContext(myContext)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {fotosFav.map((favoritoInd, e)=>
        <div className="foto"
        style={{backgroundImage : `url(${favoritoInd.portrait})`}}
        key={e}>
          <h4>{favoritoInd.name}</h4>
        </div>)}
      </div>
    </div>
  );
}
