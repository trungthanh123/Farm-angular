import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Injectable()
export class CheckLogin implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {

  }
  canActivate() {
    let isLogin:boolean;
    
    if(localStorage.getItem("isLogin") === "true") {
      isLogin = true;
    }
    else isLogin = false;
    
    if(!isLogin){
      this.router.navigate(['/']);
    }
    
    
    return isLogin;
  }
}
