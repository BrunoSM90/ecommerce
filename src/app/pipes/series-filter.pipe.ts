import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seriesFilter'
})
export class SeriesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
