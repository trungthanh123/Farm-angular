import { Component } from '@angular/core';
 
@Component({
  selector: 'money',
  template: `
    <h4>{{your_money}}<span class="glyphicon glyphicon-gbp"></span></h4>
  `,
  styleUrls:['../app.component.css']
})
export class MoneyComponent {
  your_money:number = 1000;
  
  updateYourMoney(reward:number):number {
      return this.your_money += reward;
  }
}