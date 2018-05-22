export default class UserAccount {
  public static blankAccount() {
    const temp = new UserAccount();
    temp.isBlank = true;
    temp.username = '';
    temp.email = '';
    return temp;
  }

  public static fromJSON(data: any) {
    const temp = new UserAccount();
    temp.isBlank = false;
    temp.username = '';
    temp.email = '';
    return temp;
  }

  public username: string;
  public email: string;
  public avatar: ImageData;

  public isBlank: boolean;
}
