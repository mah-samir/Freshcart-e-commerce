import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pTerm'
})
export class PTermPipe implements PipeTransform {

  transform(value:string,count:number): string {
    return value.split(' ',3).join(' ');
  }

}
