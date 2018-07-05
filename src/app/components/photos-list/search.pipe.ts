import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchPhoto'
})
export class SearchPhotoPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
        return [undefined];
    }
    if (!searchText) {
        return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter( item => {
      return item.title.toLowerCase().includes(searchText);
    });
   }
}
