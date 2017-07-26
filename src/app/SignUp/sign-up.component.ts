import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RequestOptions, Headers } from "@angular/http";
import { Http } from '@angular/http';
import { AppService } from '../services/app.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../app.component.css']
})
export class SignUpComponent {
  public token: string;
  public message = '';

  constructor(private router: Router, private loginService: LoginService, private http: Http, private _appService: AppService) {
  }

  vadidateForm(name, password) {
    localStorage.setItem("username", name);
    //this.loginService.setLogin(true);

    let data = {
      userName: name,
      passWord: password
    };
    let headers  = new Headers({ 'Content-Type': 'application/json' });
    let options  = new RequestOptions({ headers: headers });
    if (name != '' && password != '') {
      this.http.post('http://103.48.191.254/api/tree/login', data, options)
        .map(res => res.json())
        .subscribe(res => {
          this.message = res.message; if (res.status === 200) {
             localStorage.setItem("token", res.token);
             this.router.navigate(['/my-farm']); };
        }
        , error => this.message = error.json().message
        );
    }
    else this.message = "Username and Password are required"
  }
}
