import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  _isLogin: boolean;
  isLogin() {
    return this._isLogin;
  }
  setLogin(check: boolean) {
    
    
    this._isLogin = check;
    console.log(check);
    
    localStorage.setItem("isLogin", check.toString());
    
  }
}
