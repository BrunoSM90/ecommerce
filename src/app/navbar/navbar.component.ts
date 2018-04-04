import { ProductService } from './../shared/services/product.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ProductService]
})
export class NavbarComponent implements OnInit {

 @ViewChild('shoppingCartModal') shoppingCartModal;
 @ViewChild('removeItemModal') removeItemModal;

 private modalRef: NgbModalRef;

cart_List: any[] = [];
openCart = false;

constructor(private productService: ProductService, private modalService: NgbModal) { }

ngOnInit() {

  }

  openShoppingCart() {
    this.openCart = true;
  }


}
