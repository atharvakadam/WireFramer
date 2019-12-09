import React, {Component} from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import AdminScreen from './test/AdminScreen';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <header className="App-header">
           HELLO BITCH
         </header>
        <Switch>
        <Route path="/admin" component={AdminScreen} />        
        </Switch>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;

// <header className="App-header">
//           HELLO BITCH
//         </header>