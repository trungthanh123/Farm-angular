import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from '../services/app.service';
import { ShoppingService } from '../services/shopping.service';
import { TreeService } from '../services/tree.service'
@Component({
  selector: 'my-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['../app.component.css']
})
export class ShopComponent {
  @Output() outputShop = new EventEmitter();
  sum: number;
  currentMoney: number;

  quantity_Apples: number = 0;
  quantity_Orange: number = 0;
  quantity_Lemon: number = 0;
  quantity_Dragon: number = 0;
  quantity_Coconut: number = 0;
  quantity_Pear: number = 0;
  price_Apple = 50;
  price_Orange = 150;
  price_Lemon = 250;
  price_Dragon = 100;
  price_Coconut = 300;
  price_Pear = 350;

  constructor(private appService: AppService, private _shoppingService: ShoppingService, private _treeService: TreeService) {
    //lắng nghe câu trả lời từ 'farm' component (service)
    appService.money$.subscribe(data => {
      this.currentMoney = data;
    });
  }

  buy(form) {
    let data = {
      "tree":
      [
        { "TenCay": "apple", "SoLuong": this.quantity_Apples },
        { "TenCay": "orange", "SoLuong": this.quantity_Orange },
        { "TenCay": "lemon", "SoLuong": this.quantity_Lemon },
        { "TenCay": "dragon-fruit", "SoLuong": this.quantity_Dragon }
      ],
      "token": ""
    }

    this.sum = (this.quantity_Apples * this.price_Apple) + (this.quantity_Orange * this.price_Orange) +
      (this.quantity_Lemon * this.price_Lemon) + (this.quantity_Dragon * this.price_Dragon);
    
    if (this.sum <= this.currentMoney) {
      let n = [];
      if (this.quantity_Apples > 0) n.push('apple');
      if (this.quantity_Orange > 0) n.push('orange');
      if (this.quantity_Lemon > 0) n.push('lemon'); 
      if (this.quantity_Dragon > 0) n.push('dragon-fruit'); 

      let dataFromShop = { 'form': form.value, 'n': n }
      this._shoppingService.API_Shopping(data).subscribe(res => {
        if (res.status === 200) {
          this.outputShop.emit(dataFromShop);
          this.currentMoney -= this.sum;
          this.appService.shopData(this.currentMoney);
          this.resetForm();
          n = [];
        }
      });
    }
    else alert("You don't have enough money");

  }
  resetForm() {
    this.quantity_Apples = 0;
    this.quantity_Dragon = 0;
    this.quantity_Lemon = 0;
    this.quantity_Orange = 0;
  }
}