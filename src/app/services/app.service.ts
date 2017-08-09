import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class AppService {

  private shop_source = new Subject<number>();
  private money_source = new Subject<number>();
  //private shop_source2 = new Subject<number>();
  // private token_login = new Subject<string>();
  private exp = new Subject<number>();
  shop$ = this.shop_source.asObservable(); //asObservable: ep kieu
  money$ = this.money_source.asObservable();
  exp$ = this.exp.asObservable();
  // token_login$ = this.token_login.asObservable();
  shopData(message: number) {
    this.shop_source.next(message);
  }
  moneyData(message: number) {
    this.money_source.next(message);
  }
  expFromFarmCom(data: number) {
    this.exp.next(data);
  }
  // getToken(data: string) {
  //   console.log(data);
  //   console.log('test');
  //   this.token_login.next(data);
  // }
}
