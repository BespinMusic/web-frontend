import * as React from 'react';
import './App.css';

import { observer } from 'mobx-react';

import Song from './domainTypes/song';

import logo from './logo.svg';

export interface IProps {
  songs: Song[];
  getSongs: () => void;
}

@observer
class App extends React.Component<IProps, any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get REALLY started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>{this.props.songs.map((song, index) => <li key={index}>{song.title}</li>)}</ul>
        <button onClick={this.props.getSongs}>Click to Fetch</button>
      </div>
    );
  }
}

export default App;
