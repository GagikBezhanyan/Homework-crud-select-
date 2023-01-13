import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudeService } from 'src/app/service/crude.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {
  public myUrl: string = environment.home.getUrl;
  public myData: any;
  public form: any;
  public list: any = {};
  public list1: any = {};
  public isShow: boolean = false;

  constructor(public request: CrudeService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      val:'',
    })
    
    this.request.getData(this.myUrl).subscribe((data) => {
      this.myData = data;
      this.myData.forEach((item: any, i: number) => {
        this.myData
        this.list[item.id] = item.cities;       
      })
    })
    
  }

  changeCountry() {
    this.isShow = true,
    // console.log(this.myData);
    // console.log(this.form);
    console.log(this.list);
    this.list1 = this.list[this.form.value.val]
    console.log(this.list1);
  }
 
}
