import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/finally";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-cart-loading',
  templateUrl: './cart-loading.html'
})
export class CartLoadingComponent implements OnInit {

  cartWeight = 0;

  ngOnInit(): void {
  }

  /*
   The dwarves are loading a cart with gems. They calculated that this cart can hold up to 1000 kg.
   The darves are a bit distracted today, however, so they just keep on throwing gems on the cart without checking its loaded weight.
   The cart will be destroyed, there's nothing we can do about it.
   We can however, make sure the dwarves apologise to their boss after the cart breaks. (See 'callApologyBackendService()')
   You're not allowed to change the subscribe function
   */
  load() {
    Observable.timer(0, 1000)
      .subscribe(() => {
        if (this.cartWeight > 1000) {
          throw new Error("CART OVERLOADED. SELF DESTRUCTING IN 3...2...1...");
        }
        console.log("Hey-ho, loading gems!");
        this.cartWeight += 300;
      });
  }

  private callApologyBackendService() {
    console.log("Oops, sorry miss White!");
  }
}
