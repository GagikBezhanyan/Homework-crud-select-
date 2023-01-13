import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public divId: string = 'block';

  public textLC: string = 'this is a small letter text';
  public textUC: string = 'THIS IS A CAPITAL LETTER TEXT';
  public date: Date = new Date();
  public num: number = 12.256823;
  
  public html: string = '<b>This is a bold text</b>';
  
  public classList: string[] = [
    'bg-color',
    'text-red'
  ];

  public style: any = {
    color: 'red',
    fontSize: '20px'
  }

  public data: string[] = [
    'menu item 1',
    'menu item 2',
    'menu item 3',
    'menu item 4',
    'menu item 5'
  ];

  public userList: User[] = [
    {
      id: 1,
      first_name: 'Mike',
      last_name: 'Smith',
      email: 'mike@mail.ru',
      phone: '+37494415228',
      age: 25
    },
    {
      id: 2,
      first_name: "Mike",
      last_name: "Smith",
      email: 'mike@mail.ru',
      phone: '+37494415228',
      age: 25
    }
  ];

  public isShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isShow = !this.isShow;
  }

  deleteUser(index: number): void {
    // console.log(index);
    this.userList.splice(index, 1);
  }
}
