import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './App.css';

class Song extends Component {

  constructor() {

    super()
    this.state={
        song : {}
    }
  }

    componentDidMount(props){
        axios.get(`/api/songs/getOne/${this.props.match.params.sid}`).then(res=>{
        this.setState({song:res.data[0]})
        }).catch(err=>{console.log(err)})
    }

    

  render() {
    return (
        <div>
            <h1>
                this.state.song.title
            </h1>
            <h4>
                this.state.song.artist
            </h4>
            <p>
                this.state.song.album
            </p>

            {/* AUDIO<br/>
            <audio loop autplay controls>
  <source src="http://www.tonycuffe.com/mp3/tail%20toddle.mp3"/>
  </audio>
<hr></hr>
            VIDEO<br/>
            <video width="300" height="200" controls>
            <source src={song} type="aidio/mpeg"/>
            </video>
            <hr></hr> */}
        </div>
    );
  }
}

export default Song;
