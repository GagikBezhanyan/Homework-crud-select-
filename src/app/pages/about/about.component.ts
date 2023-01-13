import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [RequestService]
})
export class AboutComponent implements OnInit {
  public form: any;
  constructor(public request: RequestService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.request);
    // console.log(this.request.test());
    // console.log(this.fb);
  
    this.form = this.fb.group({
      // first_name: ['', Validators.required],
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(8)])],
      last_name: ['', Validators.pattern(/^[a-z]{1,}$/)],
      age: ['', Validators.compose([Validators.min(2), Validators.max(11)])],
      email: ['',Validators.compose([Validators.pattern(/^[a-z\/\$\_\-]{1,}.[a-z]/)])]
    });

    console.log(this.form);
    console.log(this.form.get('first_name'));
    // console.log(this.form.get('first_name').dirty);
    // console.log(this.form.get('first_name').touched);
    // console.log(this.form.get('first_name').invalid);
    // console.log(this.form.get('first_name').valid); 
    // console.log(this.form.get('first_name').value);
    // console.log(this.form.get('first_name').hasError('required'));
    // console.log(this.form.get('first_name').hasError('minlength'));
    // this.form.get('first_name').disable();
    // this.form.get('first_name').enable();
    // console.log(this.form.get('first_name').disabled);
    // console.log(this.form.get('first_name').enabled);
  }

  save() {
    console.log(this.form);
    console.log(this.form.valid);
    console.log(this.form.invalid);
    console.log(this.form.value);
    console.log(this.form.touched);
    console.log(this.form.dirty);    
  }

  setVal() {
    // this.form.setValue({
    //   first_name: 'Poxos',
    //   last_name: 'Poxosyan',
    // })
    this.form.patchValue({
      last_name: 'Poxosyan',
    })
  }
  reset() {
    // this.form.reset();
    // this.form.reset({first_name: 'Sargis', last_name: 'Sargsyan'});
    this.form.get('first_name').reset();
  }

  inputChange() {
    if (this.form.get('first_name').enabled) {
      this.form.get('first_name').disable();
    } else {
      this.form.get('first_name').enable();
    }
  }
}
