import {Component, OnInit} from "@angular/core";

import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-operators',
  templateUrl: './operators.html'
})
export class OperatorsComponent implements OnInit {
  private productsWithTaxes: any[] = [];
  private productsTotalPrice = 0;

  constructor() {

  }

  ngOnInit() {
    this.receipt();
    this.receiptTotal();

  }

  /*
   A customer wants to buy these products, but their prices are still without taxes. Add 21% to the price of each product.
   */
  private receipt() {
    this.productsInShoppingCart()
      .subscribe(products => this.productsWithTaxes = []);
  }

  /*
   Oh, by the way: Illegal goods shouldn't appear on the receipt.
   Would you kindly fix that in the previous function?
   */
  theEmptyFunction() {
    console.log("You don't have to do anything with this funtion");
  }

  /*
   Now calculate the total price of the whole shopping cart (including taxes). Also, no illegal goods should be counted.
   */
  private receiptTotal() {
    this.productsInShoppingCart()
      .subscribe(totalPrice => this.productsTotalPrice = totalPrice);
  }


  private productsInShoppingCart() {
    return Observable.create(observer => {
        observer.next({name: "Diapers", type: "LEGAL", price: 25});
        observer.next({name: "Ivory sphincter replica", type: "ILLEGAL", price: 9999});
        observer.next({name: "Cucumbers", type: "LEGAL", price: 50});
        observer.next({name: "Lube", type: "LEGAL", price: 75});
        observer.next({name: "Polaroid camera", type: "LEGAL", price: 100});
        observer.next({name: "Seal clubbing hammer", type: "ILLEGAL", price: 6000});
        observer.complete();
      }
    );
  }
}
