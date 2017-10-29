import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { NgClass } from '@angular/common';
// declare var $: any;
@Component({
  selector: 'money',
  template: `
    <h4 [ngClass]="{animated: checkClass, flash: checkClass}">{{your_money}}<span class="glyphicon glyphicon-gbp"></span></h4>
  `,
  styleUrls: ['../app.component.css']
})

export class MoneyComponent implements OnInit {
  your_money: number = 10000;
  checkClass:boolean = false;
  constructor(private _appService: AppService) {
    // Lắng nghe câu trả lời từ 'shop' component (service)
    _appService.shop$.subscribe(mess => {
      this.your_money = mess;
      this.checkClass = true;
      setTimeout(() => {
        this.checkClass = false;
      }, 2000);
      
    });
    // Jquery trong angular
    // $(document).ready(function () {
    //   alert("Hello World");
    // });
    
  }
  ngOnInit() {
    //truyền số tiền hiện tại qua 'shop' component (service)
    this._appService.moneyData(this.your_money);
  }
  updateYourMoney(reward: number): number {
    //Sau khi nhận thêm tiền từ việc thu hoạch, gửi số tiền hiện có qua 'Shop' component (service)
    this.your_money += reward;
    this._appService.moneyData(this.your_money);

    return this.your_money;
  }
}