import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Glyphicon, } from 'react-bootstrap';
import { firebaseApp } from '../firebase';

import Profile from './Profile';
import Gallery from './Gallery';

import '../Styles/music.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }
//logout from the page
  logOut() {
    firebaseApp.auth().signOut();
  }
//fetching from Spotify API artist and tracks
  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = "https://api.spotify.com/v1/artists/";

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=PL&`;
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        this.setState({tracks});
      })
    });
  }

  render() {

    return(
      <div className="App">

        <div className="App-title">Music App</div>
        <div className="Form">
          <FormGroup >
            <InputGroup>
              <FormControl className="Form-control" type="text" placeholder="Search for an artist..." value={this.state.query}
                onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                  if(event.key === 'Enter'){
                    this.search();
                  }
                }}
              />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </div>

        {
          this.state.artist !== null
          ?
            <div>
              <Profile
                artist={this.state.artist}
              />

              <Gallery
                tracks={this.state.tracks}
              />
            </div>
          :<div></div>

        }
        <a className="L-button" onClick={() => this.logOut()}>Logout</a>

        <p style={{marginTop: '20px'}}>NOTE: Not every song has previerURL and can't be played</p>

      </div>
    )
  }
}

export default App;
