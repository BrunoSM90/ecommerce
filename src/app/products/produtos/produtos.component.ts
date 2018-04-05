import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Subscription} from 'rxjs/Subscription';
import { ProductService } from '../../shared/services/product.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProductService]
})
export class ProdutosComponent implements OnInit {

  /* Modais */
  @ViewChild('productDetailModal') productDetailModal;
  @ViewChild('addToListModal') addToListModal;

  /* Variáveis */
  imgSource: string;
  selectedProduct: any;
  product_List: any[];
  productFilter = '';

  /* Variáveis privadas */
  private modalRef: NgbModalRef;
  private modalRefAux: NgbModalRef;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getProducts();
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
    const result = this.productService.addItemToCart(this.selectedProduct);

    if (result) {
      window.alert('Seu produto foi inserido com sucesso.');
    } else {
      window.alert('O produto já consta no carrinho.');
    }
  }

  getProducts() {
    this.product_List = this.productService.getProducts();
  }

  closeModal() {
    this.modalRef.close();
  }

}
