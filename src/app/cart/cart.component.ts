import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './../shared/services/product.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService]
})
export class CartComponent implements OnInit {

  @ViewChild('shoppingCartModal') shoppingCartModal;
  @ViewChild('removeFromCartModal') removeFromCartModal;
  @ViewChild('calculateDeliveryModal') calculateDeliveryModal;

  @Input('openCart') openCart = false;

  private modalRef: NgbModalRef;

  total = 0;
  frete = 3132;
  selectedItem: any;
  cart_List: any[] = [];
  tax_List: any[] = [];

   constructor(private productService: ProductService, private modalService: NgbModal) { }

   ngOnInit() {
    this.getTaxList();
    console.log(this.tax_List);
   }

   getTaxList() {
    this.tax_List = this.productService.getTaxList();
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

   calculateDeliveryModalOpen() {
     this.modalRef = this.modalService.open(this.calculateDeliveryModal);
   }

   calculateTotal() {
      this.cart_List.map(next => {
        this.total = this.total + next.preco;
      });
  }

   closeModal() {
     this.modalRef.close();
   }

   removeFromCart() {
     this.productService.removeItemFromCart(this.selectedItem);
     this.closeModal();
   }

}
