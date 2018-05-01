export default class Song {
  public static fromJson(data: any): Song {
    const temp = new Song();
    temp.title = data.title;
    temp.album = data.album;
    return temp;
  }

  public title: string;
  public album: string;
}
