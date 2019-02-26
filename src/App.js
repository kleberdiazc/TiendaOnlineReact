import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import bodega from './components/bodega'
import {Login} from './components/Login'

class App extends Component {
  render() {
      return (
        <div className = "App" >
          <Switch>
            <Route exact path='/' component ={Login}/>
            <Route path="/tienda" component={bodega} />
          </Switch>
        </div >
      );
  }
}

export default App;