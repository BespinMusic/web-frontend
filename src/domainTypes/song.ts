export default class Song {
  
  public static fromJson (data: any): Song {
    const temp = new Song;
    temp.name = data.title;
    return temp;
  }

  public name: string
  

}