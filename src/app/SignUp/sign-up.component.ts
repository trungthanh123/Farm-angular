import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {

  users = [
    {username: 'admin', password: '123'},
    {username: 'admin1', password: '1234'},
  ];
  public message = '';
  constructor(private router: Router){

  }
  vadidateForm(name, password) {
    for( let i in this.users)
    {
      if(name == this.users[i].username && password == this.users[i].password)
      {
        this.router.navigate(['/my-farm']);
      }
      else this.message = 'Either Username or Password is wrong';
    }

  }
}
