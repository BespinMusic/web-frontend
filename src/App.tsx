import * as React from 'react';
import './App.css';

import { observer } from 'mobx-react';

import Song from './domainTypes/song';

// import logo from './logo.svg';

import SongForm from './components/Songform';

import {
  Alignment,
  Button,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

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
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Bespin Music</NavbarHeading>
            <NavbarDivider />
            <Button className="pt-minimal" icon="home" text="Home" />
            <Button className="pt-minimal" icon="document" text="Files" />
          </NavbarGroup>
        </Navbar>
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
