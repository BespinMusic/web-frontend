import {action, observable} from 'mobx';
// import {fromPromise} from 'mobx-utils';
import Song from '../domainTypes/song';



export default class SongStore {

  public songs = observable<Song>([])

  @action.bound public fetchSongs() {
    console.log("test")
    fetch('/songs')
      .then((response) => response.json())
      .then((data) => {
        const temp = data.map((song: any) => {
          return Song.fromJson(song);
        });
        this.songs.replace(temp)
      });
  }
}