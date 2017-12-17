import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seriesFilter'
})
export class SeriesFilterPipe implements PipeTransform {

  transform(items: any, nome: any): any {

    let retorno = items;

    if (nome.trim() !== '') {
      retorno = items.filter( item => item.nome.toUpperCase().indexOf(nome.toUpperCase()) > -1);
    }
    return retorno;
  }

}
