import {Component} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-weight-calculation',
  templateUrl: './weight-calculation.html'
})
export class WeightCalculationComponent {

  cartWeight: number;

  horsesNeeded: number;
  totalWeight: number;

  /*
   Snow White wants to sell her gems. She needs to transport them to the jeweller, though.
   How many horses does she need at minimum to transport all her gems?
   A single horse can pull 400kg to the jeweller.
   The gems have a certain weight, but the cart itself also weighs quite a bit.
   The cart also has a robotic driver that weighs 20% of the cart's weight
   Snow White picks the smallest cart that is available and can fit all gems that were mined that day.
   She inputs the cart's weight and then pushes the button that calculates the number of horses needed.
   */
  calculateWeight() {
    this.getTodaysGemHaul()
      .subscribe(totalWeight => {
        // this.totalWeight = totalWeight;
        // this.horsesNeeded = Math.ceil(totalWeight / 400);
      });
  }

  private getTodaysGemHaul() {
    return Observable.from([{type: "RUBY", weight: 200}, {type: "EMERALD", weight: 400}, {type: "DIAMOND", weight: 1100}]);
  }
}
