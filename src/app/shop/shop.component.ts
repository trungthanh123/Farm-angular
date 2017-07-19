import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'my-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../app.component.css']
})
export class ShopComponent {
  @Output() outputShop = new EventEmitter();
  name: string;
  sum: number;
  currentMoney: number;

  quantity_Apples: number = 0;
  quantity_Orange: number = 0;
  quantity_Lemon: number = 0;
  quantity_Dragon: number = 0;
  quantity_Coconut: number = 0;
  quantity_Square: number = 0;
  price_Apple = 5;
  price_Orange = 10;
  price_Lemon = 8;
  price_Dragon = 6;
  price_Coconut = 7;
  price_Square = 500;

  constructor(private appService: AppService) {
    //lắng nghe câu trả lời từ 'money' component (service)
    appService.money$.subscribe(data => {
      this.currentMoney = data;
      
      
    });
  }

  buy(form) {
    this.sum = (this.quantity_Apples * this.price_Apple) + (this.quantity_Orange * this.price_Orange) +
      (this.quantity_Lemon * this.price_Lemon) + (this.quantity_Dragon * this.price_Dragon) + (this.quantity_Square * this.price_Square);      
    // nếu số tiền để mua < số tiền hiện có => dữ liệu từ 'output' sẽ đc chuyển đi
    if (this.sum <= this.currentMoney) {
      this.currentMoney -= this.sum;
      this.appService.quantitySquare_Shop(this.quantity_Square);
      //Sau khi thanh toán xong, truyền 'currentMoney' sang cho 'money' component (service)
      this.appService.shopData(this.currentMoney);
      //số lượng cây trồng sẽ chuyển qua 'farm' component để cập nhật số lượng cây trong kho (output)
      this.outputShop.emit(form.value);
    }
    else alert("You don't have enough money")
    this.quantity_Apples = 0;
    this.quantity_Dragon = 0;
    this.quantity_Lemon = 0;
    this.quantity_Orange = 0;
    this.quantity_Square = 0;
    // console.log(form.value);
    // console.log(form.controls['quantity-apple'].value);
    // console.log(form.controls['quantity-orange'].value);
  }
}