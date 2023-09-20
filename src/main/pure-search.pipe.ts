import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSearch',
})
export class PureSearchPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    if (!items.data) return [];
    if (!searchText) return items;
    const regexp = new RegExp(searchText, 'i');
    return [
      ...items.data.filter((item) => {
        const properties = Object.keys(item);
        return properties.some((property) => regexp.test(item[property]));
      }),
    ];
  }
}
