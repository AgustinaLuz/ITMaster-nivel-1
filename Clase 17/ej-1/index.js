import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const enlaces = ['Home', 'Contacto', 'Redes']

const App = () => (
    <>
    <header>
        <Titulo titulo="Header"/>
    </header>
    <nav>
        <ul><Navegacion /></ul>
    </nav>
    <main>
    <Titulo2 titulo2="Header 2"/>
    <Parrafo parrafo="Soy el parrafo"/>
    </main>
    <footer>
    <Pie textofooter="Texto del pie"/>
    </footer>           
    </>
)

const Titulo = (props) => (
    <header>
        <h1>{props.titulo}</h1>
    </header>                   
)
const Titulo2 = (props) => (
     <h2>{props.titulo2}</h2>
)
const Parrafo =(props) => (
    <main><p>{props.parrafo}</p></main>
)
const Pie =(props) => (
    <footer>
        <small>{props.textofooter}</small>
    </footer>
)
const Navegacion = () => (
   enlaces.map ( (enlace,i) => <li key={i}><a href={"/" }>{enlace}</a></li>)
)

ReactDOM.render(<App />,document.getElementById('root'));
