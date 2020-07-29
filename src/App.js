import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Route exact path='/'
               component={() => <Home/>}/>
               <Route exact path='/logowanie'
               component={() => <Login/>}/>
               <Route exact path='/rejestracja'
               component={() => <Register/>}/>
      </HashRouter>
    </div>
  );
}

export default App;
