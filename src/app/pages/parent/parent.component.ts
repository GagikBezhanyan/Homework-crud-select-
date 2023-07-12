import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked{
  public toChild: string = 'hi';
  public show: boolean = true;
  public num: number = 0;
  @ViewChild('test') el!: ElementRef;
  @ViewChild('child') child!: ChildComponent;

  constructor(public elementRef: ElementRef,
              public render: Renderer2) { }

  ngOnInit(): void { }
  
  getData(param: any) {
    console.log(param);
  }

  change() {
    this.num++;
  }

  ngAfterViewInit(): void {
    // console.log('Parent ngAfterViewInit run')
    // // console.log(this.el)
    // // console.log(this.el.nativeElement);
    // // console.log(this.child);
    // // console.log(this.elementRef);
    // // console.log(this.render);
  }

  ngAfterViewChecked(): void {
    // console.log('Parent ngAfterViewChecked run')
  }

  showDiv(el: HTMLElement) {
    console.log(el);
  }
}
