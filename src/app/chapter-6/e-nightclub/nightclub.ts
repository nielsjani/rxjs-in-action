import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/throttleTime";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-nightclub',
  templateUrl: './nightclub.html'
})
export class NightclubComponent implements OnInit {

  tentInhabitants = [];
  challengers = [
    {
      name: "Rusty",
      strength: 200
    },
    {
      name: "Blake",
      strength: 100
    },
    {
      name: "Jarvis",
      strength: 1000
    }
  ];
  defenders = [
    {
      name: "Scruffy",
      strength: 300
    },
    {
      name: "Doc Brown",
      strength: 50
    },
    {
      name: "Pat",
      strength: 800
    }
  ];

  ngOnInit(): void {
    this.dontTalkAboutNightclub();
  }

  /*
   The dwarves realise there's six of them and the tent has only room for three dwarves.
   Luckily, there's an old dwarven tradition to settle these kind of disputes: 3-on-3 dwarven boxing matches
   The dwarves with the lowest total strength get knocked out by the other ones and sleep outside. There will never be ties.
   */
  dontTalkAboutNightclub() {

      // .subscribe(victor => this.tentInhabitants = victor)
  }

  private calculateTotalStrength(d1) {
    return d1.map(dwarve => dwarve.strength).reduce((d, otherD) => d + otherD);
  }

  private getChallengers() {
    const query = document.querySelector("#button");
    return Observable.fromEvent(query, 'mousedown')
      .map(index => this.challengers);
  }

  private getDefenders() {
    const query = document.querySelector("#button");
    return Observable.fromEvent(query, 'mousedown')
      .map(index => this.defenders);
  }
}
