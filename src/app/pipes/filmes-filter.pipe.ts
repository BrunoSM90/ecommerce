import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmesFilter'
})
export class FilmesFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
