import {Component, OnInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/reduce";
import "rxjs/add/operator/startWith";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-nighttime',
  templateUrl: './nighttime.html'
})
export class NighttimeComponent implements OnInit {

  private nightTimeParts: any = ["M153.664,1.66c-4.418,0.001-7.999,3.583-7.998,8.002c0,2.121,0.843,4.154,2.342,5.654",
    "c-11.012-1.455-21.143-6.794-28.568-15.056c-3.125-3.124-8.19-3.123-11.314,0.002c-1.499,1.5-2.342,3.534-2.342,5.654",
    "c-10.592,21.871-36.908,31.015-58.778,20.423c-8.904-4.312-16.095-11.499-20.412-20.401c6.371,3.432,13.381,5.515,20.592,6.12",
    "C194.735,32.652,203.878,58.968,193.287,80.838z"
  ];
  private otherNightTimeParts: any = [
    "c8.262,7.425,13.601,17.556,15.056,28.568c1.516,13.506-8.203,25.684-21.709,27.2c-1.825,0.205-3.667,0.205-5.491,0l0.024-0.024",
    "c0,33.137,26.863,60,60,60s60-26.863,60-60S186.801,1.66,153.664,1.66z M193.287,80.838",
    "c12.063,1.097,23.998-3.169,32.632-11.664c13.512-14.532,15.773-36.253,5.544-53.256",
  ];
  nighttimeAssembled = "";

  ngOnInit(): void {
    this.summonMoon();
  }

  /*
   After selling the jewels, the dwarves decide to set up camp in a nearby forest
   Dwarves can only sleep when the moon is out, so they decide to speed things up and summon the moon on the spot
   They managed to gather some parts of the moon in two separate bags.
   The first, third, fifth etc parts are in the 'getNighttimeParts()' bag, while the second, fourth, sixth etc parts are in the other bag
   Assemble these parts in 'nighttimeAssembled', but make sure you maintain the correct order!
   (also put a space after each part, because Moon Magic)
   */
  summonMoon() {

  }

  private getNighttimeParts() {
    return Observable.interval(2000)
      .map(index => this.nightTimeParts[index]);
  }

  private getOtherNighttimeParts() {
    return Observable.interval(2000)
      .map(index => this.otherNightTimeParts[index]);
  }
}
