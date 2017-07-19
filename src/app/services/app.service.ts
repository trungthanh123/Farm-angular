import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private shop_source = new Subject<number>();
  private money_source = new Subject<number>();
  private shop_source2 = new Subject<number>();
  
  shop$ = this.shop_source.asObservable(); //asObservable: ep kieu
  money$ = this.money_source.asObservable();
  quantitySquare_shop$ = this.shop_source2.asObservable();
  shopData(message: number) {
    this.shop_source.next(message);
  }
  moneyData(message: number) {
    this.money_source.next(message);
  }
  quantitySquare_Shop(data:number) {
    this.shop_source2.next(data);
     
  }
}