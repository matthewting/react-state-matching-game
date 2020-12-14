import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles} from '../../misc/utils'  // destructured import

import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      numTitles: 36,
      playing: false,
      previousTitleIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  startGame = (numTiles) => {
    //following is anonymous function
    this.setState((state) => ({
      playing: true,
      previousTitleIndex: null,
      toBeCleared: null,
      titles: createTitles(state.numTiles)
    }))_
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTitles={this.state.numTitles} startGame={this.startGame} />
        <Board numTitles={this.state.numTitles} titles={this.state.tiles}/>
      }
    </div>
  );

  }
}

export default App;
