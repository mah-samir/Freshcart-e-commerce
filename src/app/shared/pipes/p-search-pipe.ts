import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pSearch'
})
export class PSearchPipe implements PipeTransform {

  transform(arr: any[], search: string, sortBy: string = ''): any[] {
    if (!arr) return [];

    let filtered = arr;

    // 1- Search by title
    if (search) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 2- Sort logic
    if (sortBy) {
      switch (sortBy) {
        case 'price-asc':
          filtered = filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered = filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered = filtered.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
          break;
        case 'category':
          filtered = filtered.sort((a, b) =>
            a.category.name.localeCompare(b.category.name)
          );
          break;
      }
    }

    return filtered;
  }
}


// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'pSearch'
// })
// export class PSearchPipe implements PipeTransform {

//   transform(arr: any[], k: string): any[] {
//     return arr.filter((item) => item.title.toLowerCase().includes(k.toLowerCase()));
//   }

// }
