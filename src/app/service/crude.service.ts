import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudeService {

  constructor(public myHttp: HttpClient) { }

  getData(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.myHttp.get(url, {headers: header});
  }

  putData(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.myHttp.put(url, value, {headers: header})
  }

  postData(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.myHttp.post(url, value, {headers: header})
  }

  deleteData(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'});
    return this.myHttp.delete(url, {headers: header})
  }
}
