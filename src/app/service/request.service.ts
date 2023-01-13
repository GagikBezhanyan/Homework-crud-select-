import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private hello: string = 'Hi';

  constructor(public http: HttpClient) {
    // console.log(this.http);
    
   }
  test() { 
    return 'It is a function';
  }

  getData(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'})
    return this.http.get(url, {headers: header});
    // return this.http.get('https://reqres.in/api/users?page=2');
  }

  postData(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.post(url, value, {headers: header})
  }

  putData(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.put(url, value, {headers: header})
  }

  deleteData(url: string) {
    let header = new HttpHeaders({'Accept-language': 'en'})
    return this.http.delete(url, {headers: header})
  }
}
