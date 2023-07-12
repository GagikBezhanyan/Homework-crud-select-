import { Component, OnInit , TemplateRef} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudeService } from 'src/app/service/crude.service';
import { environment } from 'src/environments/environment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MyUser } from 'src/app/models/user';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public crudUrl: string = environment.home.get;
  public arr: MyUser[]=[];
  public each_user: any;
  public form: any;
  public userIndex!: number;
  public checkButton: boolean = true;
  public modalRef?: BsModalRef;

  constructor(public crudRequest: CrudeService,
              public fb: FormBuilder, 
              private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getData();
    this.form = this.fb.group({
      first_name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      last_name: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{1,}$/)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9_\-\.\$]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)])],
      age: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(64)])],
      adress: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9\-\/\.\ ]{1,}$/)])],
      gender: ['', Validators.required],
      country: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\-\ ]{1,}$/)])],
      city: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\-\ ]{1,}$/)])]
    })
    console.log(this.form);
    
  }

  getData () {
    this.crudRequest.getData(this.crudUrl).subscribe((data: any) => {
      this.arr = data;      
      // console.log(this.arr); 
    })
  }

  editUser(index: number): void {
    this.checkButton = true;
    this.userIndex = index;
    
    this.crudRequest.getData(`${this.crudUrl}/${this.userIndex}`).subscribe((res) => {
      this.each_user = res;
      console.log(this.each_user);
      this.form.patchValue({
        first_name: this.each_user.name,
        last_name: this.each_user.last_name,
        email: this.each_user.email,
        age: this.each_user.age,
        adress: this.each_user.adress,
        gender: this.each_user.gender,
        country: this.each_user.country,
        city: this.each_user.city
      })
      // console.log(this.form.value);
    })
  };
  
  deleteUser(index: number): void {
    this.crudRequest.deleteData(`${this.crudUrl}/${index}`).subscribe((res) => {
      // console.log(res);
      this.getData();
    }) 
  };

  addUser(): void {
    this.checkButton = false;
    this.form.reset();
  }

  sendChanges(): void {
    let value = this.form.value; 
    if (this.checkButton) {
      this.crudRequest.putData(`${this.crudUrl}/${this.userIndex}`, value).subscribe((res) => {
        // console.log(res);
        this.getData();
      })
    } else {
      this.crudRequest.postData(this.crudUrl, value).subscribe((res) => {
        // console.log(res);
        this.getData();
      })
    }
  }

}
