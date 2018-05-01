import * as React from 'react';
import './App.css';

import { observer } from 'mobx-react';

import Song from './domainTypes/song';

import logo from './logo.svg';

import SongForm from './components/Songform';

export interface IProps {
  songs: Song[];
  getSongs: () => void;
  uploadSong: (song: Song) => boolean;
}

export interface IState {
  isCreatingSong: boolean;
  newSong: Song | null;
}

@observer
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isCreatingSong: false,
      newSong: null
    };
  }

  public openForm = () => {
    this.setState({
      isCreatingSong: true,
      newSong: new Song()
    });
  };

  public songConfirmed = () => {
    const result = this.state.newSong ? this.props.uploadSong(this.state.newSong) : false;
    console.log(`Result is ${result}`);
  };

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
        <button onClick={this.openForm}>Open Form</button>
        {this.state.isCreatingSong && this.state.newSong ? (
          <SongForm song={this.state.newSong} confirmSong={this.songConfirmed} />
        ) : null}
      </div>
    );
  }
}

export default App;
