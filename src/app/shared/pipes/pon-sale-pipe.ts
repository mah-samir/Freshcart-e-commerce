import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ponSale'
})
export class PonSalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
