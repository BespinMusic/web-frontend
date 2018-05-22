import { action, observable } from 'mobx';
import UserAccount from '../domainTypes/userAccount';

import * as authn from 'keratin-authn';

export default class SongStore {
  public userAccount = observable({
    account: UserAccount.blankAccount()
  });
  private identityProvider = '/auth';

  constructor() {
    authn.setLocalStorageStore('bespin');
    authn.setHost(this.identityProvider);
  }

  @action.bound
  public signUp() {
    console.log('Sign up');

    const temp = new FormData();
    temp.append('username', 'test');
    temp.append('password', 'test');

    fetch(`${this.identityProvider}/accounts`, {
      body: temp,
      method: 'post'
    })
      .then(response => {
        console.log(response);
        response.json().then(data => {
          console.log(data);
        });
      })
      .then(data => {
        console.log(data);
        this.userAccount.account = UserAccount.fromJSON(data);
      })
      .catch(err => {
        console.log('Signups oops');
        console.log(err);
      });
  }

  @action.bound
  public signUpWithSDK() {
    console.log('Sign up with SDK');

    authn
      .signup({ username: 'testsdk5', password: 'test' })
      .then(data => {
        console.log('success');
      })
      .catch(err => {
        console.log('whoops');
      });
  }
}
