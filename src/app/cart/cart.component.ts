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
  providers: [ProductService]
})
export class CartComponent implements OnInit {

  /* Modais */
  @ViewChild('shoppingCartModal') shoppingCartModal;
  @ViewChild('removeFromCartModal') removeFromCartModal;

  /* Variáveis Privadas */
  private modalRef: NgbModalRef;
  private modalRefAux: NgbModalRef;

  /* Variáveis */
  total = 0;
  frete = 0;
  selectedItem: any;
  cart_List: any[] = [];
  tax_List: any[] = [];

   constructor(
                private http: Http,
                private productService: ProductService,
                private modalService: NgbModal
              ) { }

  ngOnInit() {
    this.getTaxList();
  }

  getTaxList() {
    this.tax_List = this.productService.getTaxList();
  }

  removeFromCart() {
    this.productService.removeItemFromCart(this.selectedItem);
    this.closeModal();
  }

  openShoppingCart() {
    this.cart_List = this.productService.getShoppingCartList();
    this.calculateTotal();
    this.modalRef = this.modalService.open(this.shoppingCartModal);
   }

  removeFromCartModalOpen(item) {
    this.selectedItem = item;
    this.modalRef = this.modalService.open(this.removeFromCartModal);
  }

  closeModal() {
    this.modalRef.close();
    if (this.frete != 0) {
      this.frete = 0;
    }
  }

  calculateDelivery(data) {
    this.tax_List.map(item => {
      if (data.uf == item.UF) {
        this.frete = item.valor;
      }
    });
  }

  calculateTotal() {
    this.cart_List.map(next => {
      this.total = this.total + next.preco;
    });
}

  consultaCep(value) {
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

}
