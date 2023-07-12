import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let obs = new Observable((params) => {
      params.next(78);
      params.next(true);
      params.next('test');
      
      setTimeout(() => {
        params.next({name: 'Mike'});
        params.error(false);
        params.complete();
      }, 1500)
      
      console.log(params);
    });

    // console.log(obs);
    // console.log(obs.subscribe(() => {}));
    
    obs.subscribe((item) => {
      console.log(item);0
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    })

  }

}
