import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public form: any;
  public userIndex: any;
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
      first_name: 'Ann',
      last_name: 'Brown',
      email: 'brown@gmail.com',
      phone: '+37477521259',
      age: 19
    },
    {
      id: 3,
      first_name: "Aram",
      last_name: "Asatryan",
      email: 'asatryan@mail.ru',
      phone: '+37477001122',
      age: 31
    },
    {
      id: 4,
      first_name: 'Hakob',
      last_name: 'Sahakyan',
      email: 'haksahak@mail.ru',
      phone: '+37494415228',
      age: 52
    }
  ];

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      last_name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-\.\$]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^\+374[0-9]{8}$/)])],
      age: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(64)])]
    })
  }

  editUser(index: number): void {
    this.userIndex = index;
    this.form.setValue({
      first_name: this.userList[index].first_name,
      last_name: this.userList[index].last_name,
      email: this.userList[index].email,
      phone: this.userList[index].phone,
      age: this.userList[index].age
    })
  }

  setVal() {    
    this.form.patchValue({
      first_name: this.form.get('first_name').value,
      last_name: this.form.get('last_name').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      age: this.form.get('age').value
    })
    
  }
  reset() {
    this.form.reset();
  }

  save(): void {
    console.log(7);
  }

}
