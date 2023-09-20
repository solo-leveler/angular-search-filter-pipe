import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSearch',
})
export class PureSearchPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    const regexp = new RegExp(searchText, 'i');
    return [
      ...items.filter((item) => {
        const properties = Object.keys(item);
        return properties.some((property) => regexp.test(item[property]));
      }),
    ];
  }
}
