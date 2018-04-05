import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe'
})
export class ProductPipe implements PipeTransform {

  transform(items: any, product: string): any {
    let retorno = JSON.parse(JSON.stringify(items));
    let compare;

    if (product.trim() !== '') {
      retorno = retorno.filter(item => {
        compare = item.nome.toUpperCase().indexOf(product.toUpperCase());

        if (compare !== -1) {
          return item;
        }
      });
    }

    return retorno;
  }

}
