import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";

import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/max";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import {Observable} from "rxjs/Observable";


class Operators2Solution {

  private dwarvesHired: any = [];
  private maxHaul: any;
  private haulTotaledByType: any = [];

  constructor() {

  }

  /*
   After a tragic mining accident, all of Snow White's dwarfs died.
   To sate Snow's hunger for shiny gemstones, she's decided to hire new dwarves
   She only hires dwarves whose names end with 'ey'
   Once she has found 7 dwarves, she stops looking
   */
  private newDwarves() {
    this.dwarvesLookingForAJob()
      .filter(dwarf => dwarf.name.endsWith("ey"))
      .take(7)
      .subscribe(dwarf => this.dwarvesHired.push(dwarf));
  }

  /*
   The dwarves send their retrieved gemstones to the surface using minecarts. Each minecart sent always carries one type
   of gemstone. The worth of a single cart can be found by multiplying the number of gems in the cart by the worth of a
   gem of that type. Find out which cart was worth the most.
   */
  private biggestHaulOfTheDay() {
    this.gemHauls()
      .map(gem => gem.amount * gem.worthPerPiece)
      .max()
      .subscribe(maxHaul => this.maxHaul = maxHaul);
  }

  /*
   Knowing which individual cart hauled in the biggest buck is one think, but knowing which gem type produced the most
   income, is another. And that's what you'll be calculating in the following method: a list of gem types and their
   total income
   EG: [type: 'diamond', value: 20000, type 'opal', value: 1000, etc]
   */
  private bestEarningGemstone() {
    this.gemHauls()
      .reduce((g1, g2) => this.handleNewOrExistingGemType(g2, g1), new Map())
      .subscribe(gemsTotalValuesMap =>
        gemsTotalValuesMap.forEach((value, type) => this.haulTotaledByType.push({type, value})))
    ;
  }

  private handleNewOrExistingGemType(g2, g1) {
    let valueOfGem = g2.amount * g2.worthPerPiece;
    if (g1.has(g2.type)) {
      valueOfGem += g1.get(g2.type);
    }
    return g1.set(g2.type, valueOfGem);
  }

  private dwarvesLookingForAJob() {
    return Observable.create(observer => {
        observer.next({name: "Droopey", age: 52, color: "Green"});
        observer.next({name: "Snoopey", age: 76, color: "Red"});
        observer.next({name: "Shaq", age: 88, color: "Purple"});
        observer.next({name: "Gothey", age: 71, color: "Orange"});
        observer.next({name: "Gotye", age: 22, color: "Vermillion"});
        observer.next({name: "Mopey", age: 117, color: "Grey"});
        observer.next({name: "Slopey", age: 45, color: "Black"});
        observer.next({name: "Cookey", age: 98, color: "Blue"});
        observer.next({name: "Gus", age: 33, color: "Lila"});
        observer.next({name: "Jumpey", age: 43, color: "Brown"});
        observer.next({name: "Another jumpey", age: 43, color: "Darkbrown"});
        observer.next({name: "Yet another jumpey", age: 43, color: "Lightbrown"});
        observer.complete();
      }
    );
  }

  private gemHauls() {
    return Observable.create(observer => {
        observer.next({type: "RUBY", amount: 20, worthPerPiece: 100});
        observer.next({type: "EMERALD", amount: 10, worthPerPiece: 500});
        observer.next({type: "RUBY", amount: 40, worthPerPiece: 100});
        observer.next({type: "DIAMOND", amount: 4, worthPerPiece: 1500});
        observer.next({type: "EMERALD", amount: 5, worthPerPiece: 500});
        observer.next({type: "OPAL", amount: 100, worthPerPiece: 50});
        observer.next({type: "EMERALD", amount: 1, worthPerPiece: 500});
        observer.next({type: "RUBY", amount: 25, worthPerPiece: 100});
        observer.next({type: "OPAL", amount: 30, worthPerPiece: 50});
        observer.next({type: "DIAMOND", amount: 1, worthPerPiece: 1500});
        observer.complete();
      }
    );
  }
}
