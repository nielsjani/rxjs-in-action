import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/using";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/observable/of';

class GemSeller {
  private disposed = false;
  private value: any;

  constructor(value) {
    this.value = value;
  }

  getValue() {
    if (this.disposed) {
      console.log("Sorry, shop's closed!");
      return undefined;
    }
    const gemToSell = this.value.length === 0 ? "ALL GEMS SOLD" : this.value.pop();
    console.log(gemToSell);
    return gemToSell;
  }

  unsubscribe() {
    this.disposed = true;
    console.log("DONE");
  }
}

@Component({
  selector: 'app-selling-gems',
  templateUrl: './selling-gems.html'
})
export class SellingGemsComponent implements OnInit {
  private subscription$: Subscription;
  gemSeller: GemSeller;

  ngOnInit() {
    this.gemSeller = new GemSeller(["DIAMOND", "RUBY", "EMERALD"]);
    this.subscription$ = Observable.using(
      () => this.gemSeller,
      () => Observable.interval(1000)
      // Gemseller will never be unsubscribed from unless you click the 'Go home' button.
      // replace the interval by the following statement, and the gemseller will be unsubscriber from immediately
      // () => Observable.of(1000)
    )
      .subscribe(value => console.log("Subscribe: " + value));
  }

  goHome() {
    this.subscription$.unsubscribe();
  }

}
