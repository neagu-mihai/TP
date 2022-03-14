class Pangram {
    private alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
 
    constructor(private phrase: string) {
      this.phrase = phrase.toLocaleLowerCase();
    }
 
    isPangram(): boolean {
      const alphabetLetters: string[] = this.alphabet.split('');
      for(let letter of alphabetLetters)
        if(this.phrase.indexOf(letter) < 0)
            return false;

      return true;
    }
}

let phrase1: Pangram = new Pangram("The quick brown fox jumps over the lazy dog.");
let phrase2: Pangram = new Pangram("Ana are mere.");

console.log(phrase1.isPangram());
console.log(phrase2.isPangram());
