import {Component} from "@angular/core";

@Component({
  selector: 'app-functional-programming-characteristics',
  templateUrl: './functional-programming-characteristics.html'
})
export class FunctionalProgrammingCharacteristicsComponent {

  decoded = "";
  toDecode: string;
  shiftAmount: number;
  private alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  /*
  Make this function Functional Programming-worthy
  It has to be
  - Declarative
  - Immutable
  - Side-effect free
   https://cryptii.com/caesar-cipher
   *  */
  decode() {
    while (this.toDecode.length > 0) {
      const characterToDecode = this.toDecode[0];
      if (characterToDecode === " ") {
        this.decoded += " ";
      } else if (isNaN(parseInt(characterToDecode, 10))) {
        const indexOfCharacterToDecode = this.alphabet.indexOf(characterToDecode);
        const decodedCharacterIndex = indexOfCharacterToDecode - this.shiftAmount < 0 ?
          (26 - this.shiftAmount) + indexOfCharacterToDecode : indexOfCharacterToDecode - this.shiftAmount;
        this.decoded += this.alphabet[decodedCharacterIndex];
      }
      this.toDecode = this.toDecode.slice(1);
    }
  }
}
