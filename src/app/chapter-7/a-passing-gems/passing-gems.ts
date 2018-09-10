import {Component} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {Subscription} from "rxjs";
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-passing-gems',
  templateUrl: './passing-gems.html'
})
export class PassingGemsComponent {

  numberOfThrows = 2;

  thrownGems = [
    {name: () => 'Emerald', value: 200},
    {name: () => 'Ruby', value: 500},
    {
      name: () => {
        if (this.numberOfThrows > 0) {
          this.numberOfThrows--;
          throw new Error("SHATTER!");
        } else {
          return "Sappphire";
        }
      }, value: 200
    },
    {name: () => 'Diamond', value: 1000},
  ];

  private rewindHell: Subscription;

  /*
Dwarves mined some gems and formed a chain between the gem pile deep within the mining shaft
and the cart that rides to the entrance of the mine. They are throwing gems between eachother, but sometimes their
throws are a bit off and the gems fracture into nearly useless chunks of shiny stone.
If a gem shatters, all dwarves start crying and go home, leaving the remaining gems in the pile to be retrieved later
   */
  startPassing() {
    Observable.from(this.thrownGems)
      .map(gem => gem.name())
      .catch(err => of("Shattered gem :("))
      .subscribe(gemName => console.log(gemName));
  }

  startPassingWithMagicalRewindPowers() {
    this.numberOfThrows = 2;
    Observable.from(this.thrownGems)
      .map(gem => gem.name())
      .retry(this.retry())
      //  Catch will only get called if numberOfThrows > the value of retry()
      .catch(() => of("Shattered gem :("))
      .subscribe(gemName => console.log(gemName));
  }

  infiteRewindHell() {
    this.numberOfThrows = 2;
    this.rewindHell =  Observable.from(this.thrownGems)
      .map(gem => gem.name())
      .retryWhen($errors => {
        console.log($errors);
        this.numberOfThrows = 5;
        return $errors.delay(3000);
      })
      .subscribe(gemName => console.log(gemName));
  }

  escapeHell() {
    this.rewindHell.unsubscribe();
  }

  private retry() {
    console.log("RETRYING!");
    return 2;
  }
}
