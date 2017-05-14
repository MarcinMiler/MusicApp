import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

import '../Styles/Login.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  register() {
    console.log(this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error});
    })
  }



  render() {
    return(

      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={500}
      >

      <div className="container">
        <div className="row">
          <h1 className="L-title">Spotify</h1>
        </div>

        <div className="row" style={{marginTop: '100px'}}>

          <div className="col-lg-12 Login">

            <h1 className="L-title-login">Rejestracja</h1>
            <div className="input-group L-div-input">
              <input className="form-control input-login" type="text" placeholder="E-mail" onChange={event => this.setState({email: event.target.value})} />
              <input className="form-control input-login" type="password" placeholder="Password" onChange={event => this.setState({password: event.target.value})} />
            </div>

            <a className="L-button" style={{marginBottom: '70px'}} onClick={() => this.register()}>Potwierdź</a>

            <div className="L-message">
              {this.state.error.message}
            </div>
          </div>


        </div>

        <h1 className="L-title-login" style={{marginTop: '100px'}}>Masz już konto?</h1>
        <Link to="/login"><div className="L-button">Logowanie</div></Link>


      </div>

      </ReactCSSTransitionGroup>
    )
  }
}
export default Register;
