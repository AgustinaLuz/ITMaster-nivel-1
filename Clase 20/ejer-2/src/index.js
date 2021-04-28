import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import TitlebarGridList from './Home.js';
import Productos from './Productos.js';
import Contactos from './Contactos.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
      <>
        <Router>
        
          <Header />
          <TitlebarGridList />
          <Switch>
           <Route path='/Home' exact component={TitlebarGridList}/>
            <Route path='/Productos' exact component={Productos}/>
            <Route path='/Contactos' exact component={Contactos}/>
          </Switch>
        
      </Router>
      </>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));