import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Location from './pages/Location';
import logo from './logo.svg';
import Footer from './components/Footer';
import Nav from './components/Nav'
import './App.css';

class App extends Component {

  componentDidMount(){
    const ele = document.getElementById('loader')
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }
  }

  render() {
    return (
      <div className="App">
      <Nav/>
      <Router>
        <div className='content'>
        <Route path='/Location' component={Location} />
        </div>
      </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
