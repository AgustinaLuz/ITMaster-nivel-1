import React, { useState } from 'react';
import ReactDOM from 'react-dom';

  //crear  un hook que genera peliculas random
const useRandomPeli = () => {
    //creo una lista de pelis en un array
const peliculas = ["Star Wars IV: A New Hope", "Star Wars V: The Empire Strikes Back", "Star Wars VI: Return of the Jedi", "Star Wars I: The Phantom Menace", "Star Wars II: Attack of the Clones", "Star Wars III: Revenge of the Sith", "Star Wars VII: The Force Awakens", "Star Wars VIII: The Last Jedi", "Star Wars IX: The Rise of Skywalker"];
const [pelicula, setPeli] = useState("---");
const changePeli = () => {
    //obtiene un numero aleatorio
    const index = Math.floor(Math.random() * peliculas.length);
    //obtenemos la peli random del array con el indice random que  obtuvimos arriba
    const peliElegida = peliculas[index];
    //seteamos la peli random 
    setPeli(peliElegida);
};
return [pelicula, changePeli];
};
//arranco con llaves un componente cuando comienzo con JS puro
const Peliculas = () => {
    //Hook de estado 
const [pelicula, changePeli] = useRandomPeli ();
    //uso return  cuando arranque con llaves el componente
    return (
        <div>
            <h2>Pelicula: {pelicula}</h2>
            <br />
            <button onClick={changePeli}>Cambiar pelicula</button>
        </div>
    );
};

ReactDOM.render(<Peliculas />,document.getElementById('root'));
