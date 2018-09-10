import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/zip";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import {Observable} from "rxjs";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-mining-buddies',
  templateUrl: './mining-buddies.html'
})
export class MiningBuddiesComponent implements OnInit {

  set1 = of("Clumsy", "Drunky", "Stinky");
  set2 = of("Handy", "Sobery", "Cleany");

  pairUp() {
    Observable.zip(this.set1, this.set2)
      .subscribe(res => console.log(res));
  }

  linearBackoff() {
    const maxRetries = 5;
    of(2, 4, 5, 6, 8)
      .map(num => this.mapOrThrow(num))
      .retryWhen(errors$ =>
        Observable.range(0, maxRetries)
          .zip(errors$, val => {
            console.log("Val (incrementing number?)" + val);
            return val;
          })
          .mergeMap(i => {
            console.log("Retrying after " + i + " seconds");
              return Observable.timer(i * 1000);
            }
          )
      ).subscribe(console.log);
  }

  private mapOrThrow(num) {
    if (num % 2 !== 0) {
      throw new Error("AARGH");
    }
    return num;
  }

  ngOnInit(): void {
    this.pairUp();
  }


}
