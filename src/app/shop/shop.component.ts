import { Component, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'my-shop',
  templateUrl: './shop.component.html',
  styleUrls:['../app.component.css']
})
export class ShopComponent {  
  @Output() outputShop = new EventEmitter();
  name:string;
  sum:number;

  quantity_Apples:number = 0;
  quantity_Orange:number = 0;
  quantity_Lemon:number = 0;
  quantity_Dragon:number = 0;
  quantity_Coconut:number = 0;
  quantity_Kiwi:number = 0;
  price_Apple = 5;
  price_Orange = 10;
  price_Lemon = 8;
  price_Dragon = 6;
  price_Coconut = 7;
  price_Kiwi = 15;

  buy(form) {
      this.outputShop.emit(form.value);
      this.sum = (this.quantity_Apples * this.price_Apple) + (this.quantity_Orange * this.price_Orange) + 
                  (this.quantity_Lemon * this.price_Lemon) + (this.quantity_Dragon * this.price_Dragon);
      console.log(this.sum);
      this.quantity_Apples = 0;
      this.quantity_Dragon = 0;
      this.quantity_Lemon = 0;
      this.quantity_Orange = 0;
      // console.log(form.value);
      // console.log(form.controls['quantity-apple'].value);
      // console.log(form.controls['quantity-orange'].value);
          
  }
}