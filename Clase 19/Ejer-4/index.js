import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Basado en documentacion: https://es.reactjs.org/docs/hooks-intro.html

const Home =() => {  
  const [dados, Tirar] = useState([]);
  
  const Randomizar = () => {
    const dados = [];
    dados.push(Math.ceil(Math.random()*6));
    dados.push(Math.ceil(Math.random()*6));
    if (dados[0] > dados[1]){
      dados.push("Gano dado 1");
    }
    else if ( dados[1] > dados[0] ) {
      dados.push("Gano dado 2");
    }
    else {
      dados.push("Empate");
    }
    
    Tirar(dados);
  }
      return (
        <>
        <div>
            <button onClick={(Randomizar)}>Random dados.</button>
        </div>
        <div>
          <p>Dado 1: {dados[0]} - Dado 2: {dados[1]}</p>
          <p>Ganador: {dados[2]}</p>
        </div>
        </>
      );
  
}

ReactDOM.render( <Home />, document.getElementById("root") );
