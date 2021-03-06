import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class CheckLogin implements CanActivate {
  constructor(private loginService: LoginService) {

  }
  canActivate() {
    return this.loginService.isLogin();
  }
}
