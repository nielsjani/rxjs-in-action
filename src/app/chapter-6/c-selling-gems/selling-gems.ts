import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/using";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import {Observable} from "rxjs/Observable";
import {AnonymousSubscription, Subscription} from "rxjs/Subscription";

class GemSeller implements AnonymousSubscription {
  private disposed = false;
  private value: any;

  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value.length === 0 ? "ALL GEMS SOLD" : this.value.pop();
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
export class SellingGemsComponent  {
  private subscription$: Subscription;

  /*
  I don't get it :(
  https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/using.md
   */
  sellNextGemOnClick() {
    const gemSeller = new GemSeller(["DIAMOND", "RUBY", "EMERALD"]);
    this.subscription$ =  Observable.using(
      () => gemSeller,
      (resource: GemSeller) => Observable.interval(1000)
    )
      .subscribe(value => console.log(gemSeller.getValue()));
  }

  goHome() {
    this.subscription$.unsubscribe();
  }
}
