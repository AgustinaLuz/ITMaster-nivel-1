import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const menu = [
        { texto: "Home", link: "index.html"},
        { texto: "Contacto", link: "contacto.html"},
        { texto: "Nosotros", link: "about.html"}
    ];

const App = () =>(
  <>
      <Titular titular="El titular."/>
      <nav>
          <ul><Menu /></ul>
      </nav>
      <Figure url1="https://via.placeholder.com/150" url2="https://via.placeholder.com/150" url3="https://via.placeholder.com/150" alt="pictures" caption="Las figuras :)" />
      
  </>
);

const Titular =(props)=>(
    <header>
    <h1>{props.titular}</h1>
    </header>
)

const Menu = () =>(
  menu.map((enlace,i)=><li key={i}><a href={"/" + enlace.link}> {enlace.texto}</a></li>)
  
);

const Figure = (props) =>(
    <figure>
        <img src={props.url1} alt={props.alt}/>
        <img src={props.url2} alt={props.alt}/>
        <img src={props.url3} alt={props.alt}/>
        <figcaption>{props.caption}</figcaption>
    </figure>
    
)

ReactDOM.render(<App />, document.getElementById('root'));
