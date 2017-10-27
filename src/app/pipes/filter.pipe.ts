import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term:any): any {
    if(!items || !term) {
      return items;
    }
    //term = term.toUpperCase();
    
    
    // items.map(res => res.name = res.name.toLowerCase());
    return items.filter(item => item.name.indexOf(term) !== -1);
  }

}
