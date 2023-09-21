import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureSearch',
  pure: false,
})
export class PureSearchPipe implements PipeTransform {
  transform(items: any, searchText: string, countObj: any): any[] {
    if (!items.data) return [];
    if (!searchText) {
      countObj.searchCount = items.data.length;
      return items;
    }
    const regexp = new RegExp(searchText, 'i');
    const returnObj = [
      ...items.data.filter((item) => {
        const properties = Object.keys(item);
        return properties.some((property) => regexp.test(item[property]));
      }),
    ];
    countObj.searchCount = returnObj.length;
    return returnObj;
  }
}
