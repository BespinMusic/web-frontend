import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AccountStore from './stores/accountStore';
import SongStore from './stores/songStore';

const accountStore = new AccountStore();

const songStore = new SongStore();
songStore.fetchSongs();

ReactDOM.render(
  <App
    songs={songStore.songs}
    getSongs={songStore.fetchSongs}
    uploadSong={songStore.uploadSong}
    signUp={accountStore.signUp}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
