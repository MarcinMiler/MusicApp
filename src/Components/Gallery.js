import React, { Component } from 'react';

import '../Styles/App.css';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio
      })
    } else {
      if(this.state.playingUrl === previewUrl){
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: previewUrl,
          playing: true,
          audio
        })
      }
    }
  }

  render() {

    const { tracks } = this.props;

    return(
      <div>
        {tracks.map((track, k) => {

            const trackImg = track.album.images[1].url;
          return(
            <div key={k} className="Track" onClick={() => this.playAudio(track.preview_url)}>

              <img src={trackImg} className="Track-img" alt="track" />

              <div className="Track-play">
                <div className="Track-play-inner">
                  &#9654;
                </div>
              </div>

              <p className="Track-text">{track.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
