import React from 'react';
import './App.css';
import data from './data.json';
import mark from './unclemark.jpg';


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt( min: number, max: number ) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const min = 0;
const max = data.length - 1;


function getNewEntry() {
  return data[ getRandomInt( min, max ) ];
}


interface State {
  chosen: string;
}


class App extends React.Component<{}, State> {
  public state: State = {
    chosen: getNewEntry()
  }

  public render() {
    return (
      <div id="root">
        <img alt="mark" />
        <button
          className="button"
          onClick={() => this.setState({ chosen: getNewEntry() })}
        >
          {'Gimme'}
        </button>
        <h1>{this.state.chosen}</h1>
      </div>
    );
  }
}


export default App;
