import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import song from './song';
import './App.css';

class Allsongs extends Component {

 

  componentWillReceiveProps(nextprops) {
    if(nextProps.songs && !this.props.songs){
        this.props.songs=nextprops.songs
    }
  }

  render() {
    return (
    
    <div>
        {this.props.songs.map(song=>
          <div>
          <Link to="/song/:sid">{song.title}</Link>
          <p>{song.artist}</p>
      </div>
        )}
      </div>
    );
  }
}

export default Allsongs;
