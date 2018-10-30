import React, { Component } from 'react';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Footer from './pages/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route path='/About' component={ About } />
          <Route path='/Gallery' component={ Gallery } />
          <Route path='/Pricing' component={ Pricing } />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
