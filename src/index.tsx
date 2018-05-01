import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SongStore from './songStore/songStore';

const songStore = new SongStore();
songStore.fetchSongs();

ReactDOM.render(
  <App songs={songStore.songs} getSongs={songStore.fetchSongs} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
