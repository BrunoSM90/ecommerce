import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from './../../shared/services/product.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: []
})
export class ProdutosComponent implements OnInit {

  /* Modais */
  @ViewChild('productDetailModal') productDetailModal;
  @ViewChild('addToListModal') addToListModal;
  @ViewChild('cartFeedbackModal') cartFeedbackModal;

  /* Variáveis */
  productService: ProductService;
  imgSource: string;
  selectedProduct: any;
  productFilter = '';
  successCartOperation: boolean;

  /* Listas */
  product_List: any[];
  cart_List: any[] = [];

  /* Variáveis privadas */
  private modalRef: NgbModalRef;

  constructor(_productService: ProductService,
              private modalService: NgbModal,) {

              this.productService = _productService;
  }

  ngOnInit() {
    this.getProducts();

    ProductService.emitCartOperation.subscribe(response => {
      this.successCartOperation = response;
      this.modalRef = this.modalService.open(this.cartFeedbackModal);
    });

  }

  showItemDetails(item, index) {
    this.selectedProduct = item;
    this.modalRef = this.modalService.open(this.productDetailModal);
  }

  openListModal(item) {
    this.selectedProduct = item;
    this.modalRef = this.modalService.open(this.addToListModal);
  }

  addToCart() {
    this.closeModal();
    this.productService.addItemToCart(this.selectedProduct);
  }

  getProducts() {
    this.product_List = this.productService.getProducts();
  }

  closeModal() {
    this.modalRef.close();
  }

}
