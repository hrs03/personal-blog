import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portofolio from './pages/Portofolio/Portofolio';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome, faNewspaper, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faHome, faNewspaper, faCameraRetro)

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="mr-2">Primary</Button>
        </a>
        
      </header> */}
      <Switch>
          <Route exact path='/' component={Portofolio} />
          <Route path='/blog' component={Blog} />
          <Route path='/gallery' component={Gallery} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
