import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import Navbar from './components/Navbar/Navbar.js';
import RegisterScreen from './components/RegisterScreen/RegisterScreen.js';
import LoginScreen from './components/LoginScreen/LoginScreen.js';
import HomeScreen from './components/HomeScreen/HomeScreen.js';
import EditScreen from './components/EditScreen/EditScreen'
import AdminScreen from './test/AdminScreen'

import './App.css';

class App extends Component {

  render(){
    const { auth } = this.props;

    if(auth.isLoaded){
      return (
        <BrowserRouter>
        <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/admin" component={AdminScreen} />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/wireFrame/:id" component={EditScreen} />
                <Route path="/:any" component={HomeScreen} />
              </Switch>
            </div>
        </BrowserRouter>
      );
    }

    return null;
    
  }

}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App);

// <header className="App-header">
//           HELLO BITCH
//         </header>