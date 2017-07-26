import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class TreeService {

  token = '';
  constructor(private _http: Http) {
    this.token = localStorage.getItem("token");
  }
  API_CayDaTrong(): Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/data', { "token": this.token })
      .map(data => data.json())
  }
  API_TrongCay(data) {
    data.token = this.token;
    this._http.post('http://103.48.191.254/api/tree/plan', data)
      .map(data => data.json())
      .subscribe(res => console.log("trongcay"+res))
  }
  API_LayCayTrong(): Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/detail', { "token": this.token })
      .map(data => data.json())
  }
}
