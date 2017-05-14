import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

//import icons from react-icons
import FaSearch from 'react-icons/lib/fa/search';
import FaGroup from 'react-icons/lib/fa/group';
import FaClock from 'react-icons/lib/fa/clock-o';

import '../Styles/Login.css';
import '../Styles/Animations.css';

class Login extends Component {
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

//login with firebase
  login() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    //catching errors when login is failed
      .catch(error => {
        this.setState({error});
      })
  }

  render() {
    return(
      //Animations of the page when appear
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

            <div className="col-lg-6 Login">

              <h1 className="L-title-login">Zaloguj się</h1>
              <div className="input-group L-div-input">
                <input className="form-control input-login" type="text" placeholder="E-mail" onChange={event => this.setState({email: event.target.value})} />
                <input className="form-control input-login" type="password" placeholder="Password" onChange={event => this.setState({password: event.target.value})} />
              </div>

              <a className="L-button" style={{marginBottom: '70px'}} onClick={() => this.login()}>Potwierdź</a>

              <p>Default account :</p>
              <p>email: test@test.com</p>
              <p>password: testtest</p>

              <div>
                {/* render error when login failed */}
                { this.state.error.message }
              </div>


            </div>
            <div className="col-lg-6 Features">

              <h1 className="L-title-login">Spotify umożliwia Ci:</h1>

              <div className="L-div-input2">
                <h1 className="L-text"><FaSearch style={{fontSize: '28px', marginRight: '15px'}} /> Odkrywanie nieznanych Ci utworów</h1>
                <h1 className="L-text"><FaGroup style={{fontSize: '28px', marginRight: '15px'}} /> Dzielenia się z nią z przyjaciółmi</h1>
                <h1 className="L-text"><FaClock style={{fontSize: '28px', marginRight: '15px'}} /> Bycia na biężąco z muzyką</h1>
              </div>

            </div>

          </div>

          <h1 className="L-title-login" style={{marginTop: '100px'}}>Nie masz jeszcze konta?</h1>
          {/* Change page to Register */}
          <Link to="/register"><div className="L-button">Rejestracja</div></Link>


        </div>

      </ReactCSSTransitionGroup>


    )
  }
}
export default Login;
