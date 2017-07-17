import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {

  private shop_source = new Subject<number>();
  private money_source = new Subject<number>();
  
  shop$ = this.shop_source.asObservable();
  money$ = this.money_source.asObservable();
  shopData(message: number) {
    this.shop_source.next(message);
  }
  moneyData(message: number) {
    this.money_source.next(message);
  }
}