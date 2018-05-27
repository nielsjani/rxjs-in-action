import {Observable} from "rxjs/Observable";
class UnsubscribingSolution {

  private secretCode = "andre=god";
  private currentIndex = 0;
  private showSecret = false;

  /*
   As soon as the secret is shown, we no longer need to listen to any keypresses
   */
  private handleKeyPresses() {
    const query = document.querySelector("#theDiv");
    const subscription = Observable.fromEvent(query, 'keypress')
      .map(keyboardevent => keyboardevent["key"])
      .subscribe(key => {
        console.log("Handling ", key);
        this.handleKeypressIsCorrect(key);
        this.handleSecretCompletelyInputted();
        if (this.showSecret) {
          subscription.unsubscribe();
        }
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
