import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";

import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-unsubscribing',
  templateUrl: './unsubscribing.html'
})
export class UnsubscribingComponent implements OnInit {

  private secretCode = "andre=god";
  private currentIndex = 0;
  private showSecret = false;

  constructor() {

  }

  ngOnInit() {
    this.handleKeyPresses();

  }

  /*
   As soon as the secret is shown, we no longer need to listen to any keypresses
   */
  private handleKeyPresses() {
    const query = document.querySelector("#theDiv");
    Observable.fromEvent(query, 'keypress')
      .map(keyboardevent => keyboardevent["key"])
      .subscribe(key => {
        console.log("Handling ", key);
        this.handleKeypressIsCorrect(key);
        this.handleSecretCompletelyInputted();
      });
  }

  private handleKeypressIsCorrect(key) {
    if (this.secretCode[this.currentIndex] === key) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  private handleSecretCompletelyInputted() {
    if (this.currentIndex === this.secretCode.length) {
      this.showSecret = true;
    }
  }
}
