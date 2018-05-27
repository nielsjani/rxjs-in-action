import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import {Observable} from "rxjs/Observable";

class OperatorsSolution {
  private productsWithTaxes: any[] = [];
  private productsTotalPrice = 0;

  /*
   A customer wants to buy these products, but their prices are still without taxes. Add 21% to the price of each product.
   */
  private receipt() {
    this.productsInShoppingCart()
      .filter(this.illegalProductsFilter())
      .map(product => {
        product.price = product.price * 1.21;
        return product;
      })
      .reduce((p1, p2) => {
        p1.push(p2);
        return p1;
      }, [])
      .subscribe(products => this.productsWithTaxes = products);
  }

  private illegalProductsFilter() {
    return product => product.type !== "ILLEGAL";
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
      .filter(this.illegalProductsFilter())
      .map(product => {
        product.price = product.price * 1.21;
        return product.price;
      })
      .reduce((p1, p2) => {
        return p1 + p2;
      })
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
