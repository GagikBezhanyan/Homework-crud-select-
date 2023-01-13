import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private url: string = environment.home.get;

  constructor(public request: RequestService) { 
    // console.log('service');
    // console.log(request);
    
  }

  ngOnInit(): void {
    // console.log(this.request.getData());
    // this.request.getData(this.url).subscribe((data) => {
    //   // console.log(data);
    // }, (error) => {})
  }

  create() {
    let value = {
      "name": "John",
      "email": "John@mail.ru",
      "age": 26
    }
    this.request.postData(this.url, value).subscribe((res) => {
      console.log(res);
    })
  }

  apdate() {
    let value = {
      "name": "Tom",
      "email": "Tom@gmail.com",
      "age": 19
    }
    this.request.putData(`${this.url}/2`, value).subscribe((res) => {
      console.log(res);
    })
  }

  delete() {
    this.request.deleteData(`${this.url}/3`).subscribe((res) => {
      console.log(res);
    })
  }

}
