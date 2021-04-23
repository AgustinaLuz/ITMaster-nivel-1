import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import hImg from "img/logo.svg";

const menu = ['Posiciones','Ficture','Otras ligas', 'Contacto', 'Acerca de'];
const equipos = ['Sportivo glorias de Barracas', 'Deportivo Merlo Unido', 'Asociacion Buenos Aires', 'Club Social de fomento'];

const App = () =>(
  
  <>
      <Header />
      <nav>
          <ul><Menu /></ul>
      </nav>
      <Main />
  </>
);

const Header = (props) => (
    <header>
        <HeaderTitle hTitle="Header" hImg = "img/logo.svg"/>
    </header>
);

const HeaderTitle = (props) => (
    <>
        <h1>{props.hTitle}</h1>
        <img src={props.hImg} alt="Logo" />
    </>
);

const Titulo = (props) => (
    <h1>{props.titulo}</h1>
);

//Recorre el array enlaces utiliza el valor como texto visible y lo usa como href pasandolo a minúsculas y con replace le quita los espacios
const Menu = () =>(
  menu.map((enlace,i)=><li key={i}><a href={"/" + enlace.replace(' ', '').toLocaleLowerCase()}> {enlace}</a></li>)
  
);

const TeamLine = (props) => (
    equipos.map( (equipo, i) => <tr key={i}><td>{parseInt(i)+1}</td><td>{equipo}</td><td><button type="button" className="btn btn-primary">Ver mas</button></td></tr> )
);

const Main = (props) => (
    <>
        <Titulo titulo="Top 4 equipos."/>
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Puesto</th>
                        <th>Equipo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                        <TeamLine />
                </tbody>
            </table>
    </>
);

ReactDOM.render(<App />,document.getElementById('root'));
