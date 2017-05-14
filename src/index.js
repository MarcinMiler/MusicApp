import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { firebaseApp } from './firebase';

import App from './Components/App';
import Login from './Components/Login';
import Register from './Components/Register';

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log("User login", user);
    browserHistory.push('/app');
  } else {
    console.log("User need register");
    browserHistory.push('/login');
  }
})

ReactDOM.render(

    <Router path="/" history={browserHistory}>

      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

    </Router>,
  document.getElementById('root')
)
