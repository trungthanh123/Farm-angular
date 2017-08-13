import { Component, Input, ViewChild, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RequestOptions, Headers } from "@angular/http";
import { Http } from '@angular/http';
import { AppService } from '../services/app.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TreeService } from "../services/tree.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../app.component.css']
})
export class SignUpComponent {
  @ViewChild('staticModal') public staticModal: ModalDirective;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.keyCode;
    if (x === 27) {
      this.setMessage();
      this.signupForm.reset();
    }
  }
  public token: string;
  public messageLogin = '';
  public messageSignup = '';
  inputEmail = '';
  inputPassWord = '';
  inputConfirmPassW = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private http: Http,
    private _appService: AppService,
    private _treeService: TreeService,
    private formBuilder: FormBuilder
  ) { }
  public signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      emailSignup: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }
  setMessage() {
    this.messageSignup = '';
  }
  signUp() {
    let value = this.signupForm.value;
    if (value.password !== value.passwordConfirm) {
      this.messageSignup = "Password and Password Confirm don't matched";
    }
    else {
      let data = { "userName": value.emailSignup, "passWord": value.passwordConfirm };
      this._treeService.API_signUp(data).subscribe(res => {
        if (res.status === 200) {
          this.messageSignup = res.message;
          setTimeout(() => {
            this.staticModal.hide()
            this.signupForm.reset();
          }, 500)
        }
        if (res.status === 400) {
          this.messageSignup = res.message;
        }
      })
    }
  }
  
  vadidateForm(name, password) {
    localStorage.setItem("username", name);
    let data = {
      userName: name,
      passWord: password
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    if (name != '' && password != '') {
      this.http.post('http://103.48.191.254/api/tree/login', data, options)
        .map(res => res.json())
        .subscribe(res => {
          this.messageLogin = res.message; if (res.status === 200) {
            this.loginService.setLogin(true);
            localStorage.setItem("token", res.token);
            this.router.navigate(['/my-farm']);
          };
        }
        , error => this.messageLogin = error.json().message
        );
    }
    else this.messageLogin = "Username and Password are required"
  }
}

