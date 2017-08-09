import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class TreeService {

  token = '';
  constructor(private _http: Http) {
    // this.token = localStorage.getItem("token");
  }
  getToken() {
    return this.token = localStorage.getItem("token");
  }
  API_CayDaTrong(): Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/data', { "token": this.getToken() })
      .map(data => data.json())
  }
  API_TrongCay(data): Observable<any> {
    data.token = this.getToken();
    return this._http.post('http://103.48.191.254/api/tree/plan', data)
      .map(data => data.json())
  }
  API_LayCayTrong(): Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/detail', { "token": this.getToken() })
      .map((data) => {
        return data.json();
      })
  }
  API_MaxTree_TreesPlanted(): Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/show', { "token": this.getToken() }).map(data => data.json())
  }
  API_HarvestTree(data): Observable<any> {
    data.token = this.getToken();
    return this._http.post('http://103.48.191.254/api/tree/test', data).map(data => data.json())
  }
  API_signUp(data):Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/signup', data).map(res => res.json())
  }
  API_buySquare():Observable<any> {
    return this._http.post('http://103.48.191.254/api/tree/buyland', {"token": this.getToken()}).map(res => res.json())
  }
}
