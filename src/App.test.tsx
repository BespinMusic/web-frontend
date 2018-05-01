import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Song from './domainTypes/song';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const songs: Song[] = [];
  const getSongs = () => null;
  const uploadSong = (song: Song) => true;
  ReactDOM.render(<App songs={songs} getSongs={getSongs} uploadSong={uploadSong} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
