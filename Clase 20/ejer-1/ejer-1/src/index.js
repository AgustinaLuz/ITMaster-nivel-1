import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

const App = () => {
  const [contrasenia, Generar] = useState ()

  const Generador = () => {
    const alfanum = ['A','B','C','D','E','F','G','H','Y','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
    const contrasenia = [];
    for (let i=0; i <= 12; i++){
      contrasenia.push(alfanum[Math.ceil(Math.random()*alfanum.length)])
    }

    Generar(contrasenia);

  }
  return (
    <>
    <div id= "contain">
        <div>
  <Button onClick={(Generador)} variant="contained" id="caja"> Generar clave </Button>
  </div>
  <br/>
  {
       //  Verificamos si está seteado el array con una passwrod y mostramos solo si eso se cumple.
      contrasenia?<p>Nueva clave: <span>{contrasenia}</span></p>:null
     } 
 </div>
  </>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));
