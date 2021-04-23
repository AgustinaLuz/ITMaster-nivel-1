import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = () => {
const peliculas = [
    {titulo:"West Side Story", poster: "inception.jpg", year:"2020"},
    {titulo:"la2da", poster: "inception.jpg", year:"2010"},
    {titulo:"la3ra", poster: "inception.jpg", year:"2010"},
    {titulo:"peli2020otra", poster: "inception.jpg", year:"2020"},
    {titulo:"laultima", poster: "inception.jpg", year:"2010"},
  
  ];
  
const date = new Date()
const year = date.getFullYear()
const pelis2020 = peliculas.filter(peli => peli.year === year).map((peli,i)=> <li key={i}><strong>{peli.titulo}</strong> <em>({peli.year})</em><br/><img src={peli.poster} alt={peli.titulo}/></li>)
return(
  <>
  <h1>Las peliculas del 2020</h1>
  <ul>{pelis2020}</ul>
  </>
)
}
ReactDOM.render(<App />,document.getElementById('root'));
