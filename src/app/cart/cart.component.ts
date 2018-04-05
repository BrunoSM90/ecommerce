import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  /* Modais */
  @ViewChild('shoppingCartModal') shoppingCartModal;
  @ViewChild('removeFromCartModal') removeFromCartModal;
  @ViewChild('cartFeedbackModal') cartFeedbackModal;

  /* Variáveis */
  productService: ProductService;
  total: number;
  frete = 0;
  selectedItem: any;
  successCartOperation: boolean;

  /* Listas */
  cart_List: any[] = [];
  tax_List: any[] = [];
  modal_List: any[] = [];

   constructor( _productService: ProductService,
                private http: Http,
                private modalService: NgbModal
              ) {
                this.productService = _productService;
              }

  ngOnInit() {
    this.getTaxList();

    ProductService.emitCartChange.subscribe(response => {

      if (response.method == 'add') {
        this.addItemToCart(response.object);
      }

    });
  }

  getTaxList() {
    this.tax_List = this.productService.getTaxList();
  }

  removeFromCart() {
    this.successCartOperation = false;
    this.cart_List.map((next, index) => {
      if (next.id == this.selectedItem.id) {
        this.cart_List.splice(index, 1);
        this.successCartOperation = true;
      }
    });
    this.calculateTotal();
    this.closeModal();
    this.openModal(this.cartFeedbackModal);
  }

  addItemToCart(item) {
    const check = this.cart_List.indexOf(item);
      if (check == -1) {
        this.successCartOperation = true;
        this.cart_List.push(item);
      } else {
        this.successCartOperation = false;
      }
      this.productService.checkCartOperation(this.successCartOperation);
      this.calculateTotal();
  }

  openShoppingCart() {
    this.calculateTotal();
    this.openModal(this.shoppingCartModal);

   }

  removeFromCartModalOpen(item) {
    this.selectedItem = item;
    this.openModal(this.removeFromCartModal);
  }

  openModal(modal) {
    let modalReference: NgbModalRef = null;
    modalReference = this.modalService.open(modal);
    this.modal_List.push(modalReference);
  }

  closeModal() {
    if (this.modal_List.length > 0) {
      const modalReference = this.modal_List[this.modal_List.length - 1];
      this.modal_List.splice(this.modal_List.length - 1, 1);
      modalReference.close();
    }

    this.successCartOperation = null;
  }

  calculateDelivery(data) {
    this.tax_List.map(item => {
      if (data.uf === item.UF) {
        this.frete = item.valor;
      }
    });
  }

  calculateTotal() {
    this.total = 0;
    this.cart_List.map(next => {
      this.total = this.total + next.preco;
    });
}

  consultaCep(value) {
    if (!value) {
      this.frete = 0;
    }

    const validator = /^[0-9]{8}$/;
    const cep = value;

    cep.replace(/\D/g, '');

    if (validator.test(cep)) {
      this.http.get('http://viacep.com.br/ws/' + cep + '/json')
      .map(data => data.json())
      .subscribe(response => {
        const parseResponse = JSON.parse(JSON.stringify(response));
        this.calculateDelivery(parseResponse);
      });
    }
  }

  doNothing() {
    console.log('nothing');
  }

}
