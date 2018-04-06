import { Product } from './../../models/product.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ProductService {

static emitCartChange = new EventEmitter();
static emitCartOperation = new EventEmitter();

product_List: Product[] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, imgPath: 'assets/images/notebook_id_1.png', nome: 'Dell i14 Inspiron', preco: 1919, descricao: 'Notebook modelo I14-5468-U10P',
     configuracao: {ram: '4 GB', armazenamento: '1 TB', processador: 'Intel Core i3', tela: 14}},
    // tslint:disable-next-line:max-line-length
    {id: 2, imgPath: 'assets/images/notebook_id_2.jpg', nome: 'Acer Aspire', preco: 2199, descricao: 'Notebook modelo ES1-572-347R',
    configuracao: {ram: '8 GB', armazenamento: '1 TB', processador: 'Intel Core i5', tela: 15.6}},
    {id: 3, imgPath: 'assets/images/notebook_id_3.png', nome: 'Acer ES1', preco: 1900, descricao: 'Notebook Acer acessível',
    configuracao: {ram: '4 GB', armazenamento: '500 GB', processador: 'Intel Core i3', tela: 15.6}},
    // tslint:disable-next-line:max-line-length
    {id: 4, imgPath: 'assets/images/notebook_id_4.jpg', nome: 'Dell Latitude', preco: 899, descricao: 'Notebook Dell Latitude modelo E5420',
    configuracao: {ram: '4 GB', armazenamento: '320 GB', processador: 'Intel Core i3', tela: 14}},
    // tslint:disable-next-line:max-line-length
    {id: 5, imgPath: 'assets/images/notebook_id_5.png', nome: 'Lenovo Legion', preco: 5499, descricao: 'Notebook Gamer Lenovo modelo Y720',
    configuracao: {ram: '8 GB', armazenamento: '2 TB', processador: 'Intel Core i7', tela: 15.6}},
    {id: 6, imgPath: '', nome: 'HP Probook', preco: 1550.00, descricao: 'Notebook Hp Probook ',
    configuracao: {ram: '8 GB', armazenamento: '500 GB', processador: 'Intel Core i7', tela: 14}},
    {id: 7, imgPath: 'assets/images/notebook_id_4.jpg', nome: 'Dell Latitude', preco: 899, descricao: 'Notebook Dell Latitude',
    configuracao: {ram: '4 GB', armazenamento: '250 GB', processador: 'Intel Core i3', tela: 14}},
    // tslint:disable-next-line:max-line-length
    {id: 8, imgPath: 'assets/images/notebook_id_8.jpg', nome: 'Samsung Pro', preco: 1951, descricao: 'Notebook Samsung Pro',
    configuracao: {ram: '4 GB', armazenamento: '500 GB', processador: 'Intel Core i3', tela: 15.6}},
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

  getShoppingCartList() {
    return this.shoppingCart_List;
  }

  getTaxList() {
    return this.tax_List;
  }

  /* Cart Services Start */
  addItemToCart(item: any) {
    const obj = {
      object: item,
      method: 'add'
    };

  ProductService.emitCartChange.emit(obj);
}

removeItemFromCart(item: any) {
  const obj = {
    object: item,
    method: 'remove'
  };

  ProductService.emitCartChange.emit(obj);
}

checkCartOperation(success: boolean) {
  ProductService.emitCartOperation.emit(success);
}

/* Cart Services End */

}
