import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
    const paises = [ {pais: "Argentina", capital: "Buenos Aires", continente: "América"},
                    {pais: "Alemania", capital: "Berlin", continente: "Europa"},
                    {pais: "Uruguay", capital: "Montevideo", continente: "América"},
                    {pais: "España", capital: "Madrid", continente: "Europa"},
                    {pais: "Suecia", capital: "Estocolmo", continente: "Europa"},

    ]
    const App= () => (
            <>
            <PaisesAmerica />
            <PaisesEuropa />
            </>
    );
    const Ame= () => paises.filter(pais => pais.continente === "América").map((pais, i) => (<tr key={i}><td>{pais.pais}</td> <td key={i}>{pais.capital}</td></tr>))
    const Eur = () => paises.filter(pais => pais.continente === "Europa").map((pais, i) => (<tr key={i}><td>{pais.pais}</td> <td key={i}>{pais.capital}</td></tr>))
    const PaisesAmerica = () => (
        <>
            <h1>Países de América</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>
                            Pais
                        </th>
                        <th>
                            Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                        <Ame/>
                </tbody>
            </table>
        </>
    )
    const PaisesEuropa = () => (
        <>
            <h1>Paises de Europa</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>
                            Pais
                        </th>
                        <th>
                            Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                        <Eur/>
                </tbody>
            </table>
        </>
    )

ReactDOM.render(<App />,document.getElementById('root'));
