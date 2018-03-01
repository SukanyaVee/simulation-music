import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import song from './sampleaudio.wav';
import video from './small.mp4';
// import song from './song';
// import Allsongs from './allsongs';
import './App.css';

class App extends Component {

  constructor() {

    super()
    this.state={
      songs: []
    }
  }

  // componentDidMount(){
  //   axios.get('/api/songs/get').then(res=>{
  //     this.setState({songs:res.data})
  //   }).catch(err=>{console.log(err)})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Songs</h1>
        </header>
        <main>

          <audio src={song} loop controls autoPlay/><br/>
          <video autoplay controls>
  <source type="video/mp4" src={video}/>
</video>
<hr></hr>
            VIDEO<br/><iframe width="300" height="200" src="https://www.youtube.com/embed/X8cqGSFbhtY" ></iframe><br/>
            AUDIO <br/><iframe width="300" height="45" src={song} ></iframe>
        </main>
        {/* <div>
          <Route path="/song/:sid" component={Song}/>
          <Route path="/allsongs" render={()=><Allsongs  songs={this.state.songs}/>}/>
        </div> */}
      </div>
    );
  }
}

export default App;
