import { Product } from './../../models/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

product_List: Product[] = [
    {id: 1, nome: 'Macbook Air', preco: 5000, descricao: 'Velho', configuracao: ''},
    {id: 2, nome: 'Asus XLS', preco: 2900, descricao: 'Velho', configuracao: ''},
    {id: 3, nome: 'Itautec 2', preco: 2200, descricao: 'Novo', configuracao: ''},
    {id: 4, nome: 'Avell pro 2', preco: 4200, descricao: 'Novo', configuracao: ''},
    {id: 5, nome: 'Macbook Pro', preco: 4200, descricao: 'Novo', configuracao: ''},
    {id: 6, nome: 'HP laserjet', preco: 4200, descricao: 'Novo', configuracao: ''},
    {id: 7, nome: 'Itautec xsxs2', preco: 4200, descricao: 'Novo', configuracao: ''},
    {id: 8, nome: 'Samsung X', preco: 4200, descricao: 'Novo', configuracao: ''},
  ];

  tax_List: any[] = [
    { UF: 'AC', valor: 24.50}, { UF: 'AL', valor: 60.48},
    { UF: 'AM', valor: 83.16}, { UF: 'AP', valor: 51.96},
    { UF: 'BA', valor: 44.22}, { UF: 'CE', valor: 27.59},
    { UF: 'DF', valor: 60.3}, { UF: 'ES', valor: 65.74},
    { UF: 'GO', valor: 63.6}, { UF: 'MA', valor: 51.99},
    { UF: 'MG', valor: 45.79}, { UF: 'MS', valor: 70.88},
    { UF: 'MT', valor: 49.93}, { UF: 'PA', valor: 15.78},
    { UF: 'PB', valor: 7.74}, { UF: 'PE', valor: 42.76},
    { UF: 'PI', valor: 45.61}, { UF: 'PR', valor: 16.37},
    { UF: 'RJ', valor: 81.58}, { UF: 'RN', valor: 22.52},
    { UF: 'RO', valor: 91.56}, { UF: 'RR', valor: 62.54},
    { UF: 'RS', valor: 6.79}, { UF: 'SC', valor: 86.9},
    { UF: 'SE', valor: 83.4}, { UF: 'SP', valor: 50.97},
    { UF: 'TO', valor : 27.21}];

shoppingCart_List: any[] = [];

constructor() { }

getProducts() {
  return this.product_List;
}

addItemToCart(item) {
  // verificar se o item já não está na lista com ID e indexOf.
 this.shoppingCart_List.push(item);
}

getShoppingCartList() {
  return this.product_List;
}

getTaxList() {
  return this.tax_List;
}

removeItemFromCart(item) {
  this.product_List.map((next, index) => {
    if (next.id === item.id) {
      console.log(index);
      this.product_List.splice(index, 1);
    }
  });
}

}
