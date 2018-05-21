class FunctionalProgrammingCharacteristicsSolution {

  decoded = "";
  toDecode: string;
  shiftAmount: number;
  private alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  decode() {
    const alphabet = this.alphabet;
    const toDecode = this.toDecode;
    const shiftAmount = this.shiftAmount;

    this.decoded = this.performDecoding(toDecode, alphabet, shiftAmount);
  }

  private performDecoding(toDecode: string, alphabet: string[], shiftAmount: number) {
    return toDecode.split('')
      .filter(charToDecode => this.isNonNumeric(charToDecode) || this.isSpace(charToDecode))
      .map(this.mapCharacter(alphabet, shiftAmount))
      .join("");
  }

  private isNonNumeric(charToDecode) {
    return isNaN(parseInt(charToDecode, 10));
  }

  private isSpace(charToDecode) {
    return charToDecode === " ";
  }

  private mapCharacter(alphabet: string[], shiftAmount: number) {
    return charToDecode => this.isSpace(charToDecode) ? " " : this.decodeCharacter(charToDecode, alphabet, shiftAmount);
  }

  private decodeCharacter(charToDecode: string, alphabet: string[], shiftAmount: number) {
    const indexOfCharacterToDecode = alphabet.indexOf(charToDecode);
    const decodedCharacterIndex = this.shouldDecodingStartCountingFromBackOfAlphabet(indexOfCharacterToDecode, shiftAmount) ?
      this.mapFromEndOfAlphabet(indexOfCharacterToDecode, shiftAmount, alphabet) :
      this.mapFromCurrentPosition(indexOfCharacterToDecode, shiftAmount);
    return alphabet[decodedCharacterIndex];
  }

  private shouldDecodingStartCountingFromBackOfAlphabet(indexOfCharacterToDecode: number, shiftAmount: number) {
    return indexOfCharacterToDecode - shiftAmount < 0;
  }

  private mapFromEndOfAlphabet(indexOfCharacterToDecode: number, shiftAmount: number, alphabet) {
    return (alphabet.length - shiftAmount) + indexOfCharacterToDecode;
  }

  private mapFromCurrentPosition(indexOfCharacterToDecode: number, shiftAmount: number) {
    return indexOfCharacterToDecode - shiftAmount;
  }
}
