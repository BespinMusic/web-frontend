import * as React from 'react';

import { observer } from 'mobx-react';

import Song from '../domainTypes/song';

import InputField from './InputField';

export interface IProps {
  song: Song;
  confirmSong: () => void;
}

@observer
class SongForm extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
  }

  public updateProperty(key: string, value: string) {
    this.props.song[key] = value;
  }

  public render() {
    const { song } = this.props;
    return (
      <div>
        <h1>My Song Form</h1>
        <form>
          <InputField
            name="title"
            value={song.title}
            id="newSongTitle"
            onChange={this.updateProperty}
            label="Song Title"
          />
          <InputField
            name="album"
            value={song.album}
            id="newSongName"
            onChange={this.updateProperty}
            label="Song Album"
          />
        </form>
        <button onClick={this.props.confirmSong}>Upload Song</button>
      </div>
    );
  }
}

export default SongForm;
