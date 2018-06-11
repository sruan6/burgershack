import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './App.css';

class App extends Component {


  componentDidMount(){
    const ele = document.getElementById('loader');
    if(ele){
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = '';
        }, 1000)
      }, 1000)
    }
  }

  render() {
    return (
      <div className="App">
        <Nav/>
      </div>
    );
  }
}

export default App;
