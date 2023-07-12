import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    // console.log(value);
    // console.log(args);
    // return null; 
    // return `${value.trim()}`
    return `${value.trim()} and Mike`
    // return `<span>${value.trim()}</span>`
    // return `<span class="red">${value.trim()}</span>`    
  }

}
