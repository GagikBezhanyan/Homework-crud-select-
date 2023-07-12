import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit {
  @Input('test') data: string = '';
  @Input('name') name: string = '';
  @Input('number') num1: number = -1;
  @Output('out') out: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    // console.log('Child constructor run');
   }

   show (e: Event) {
    console.log(e);
    console.log(new EventEmitter());
    this.out.emit(1);
  }

  ngOnInit(): void {
    // // console.log(this.data);
    // // console.log(this.name);
    // // this.out.emit(true);
    // console.log('Child ngOnInit run');
  }

  ngOnDestroy(): void {
    // console.log('Child ngOnDestroy run');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child ngOnChange run');
    // // console.log(changes); 
  }

  ngDoCheck(): void {
    // console.log('Child ngDoCheck run');
  }
  
  ngAfterViewInit(): void {
    // console.log('Child ngAfterViewInit run')
  }

}