import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmesFilter'
})
export class FilmesFilterPipe implements PipeTransform {

  transform(items: any, name: string): any {
    let retorno = items;
    if (name.trim() !== '') {
      retorno = items.filter(item => item.nome.toUpperCase().indexOf(name.toUpperCase()) !== -1);
    }

    return retorno;
  }

}
