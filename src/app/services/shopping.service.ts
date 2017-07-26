import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class ShoppingService {
  token = '';
  constructor(private _http: Http) { 
    this.token = localStorage.getItem("token");
  }
  API_Shopping(data): Observable<any> {
    data.token = this.token;
    return this._http.post('http://103.48.191.254/api/tree/buy', data)
      .map(data => data.json())
  }
}
