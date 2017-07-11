import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  _isLogin: boolean = false;
  isLogin() {
    return this._isLogin;
  }
  setLogin(check: boolean) {
    this._isLogin = check;
  }
}
