const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt (string, key) {
    if (!string || !key) throw new Error('Error')

    const arrAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arrString = string.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    let arrAnswer =[];
    let count = 0;
    
    arrString.forEach(elem => {
      if (arrAlphabet.indexOf(elem) != -1) {
        let indexKey = arrKey[count % arrKey.length];
        arrAnswer.push(arrAlphabet[((arrAlphabet.indexOf(elem) + arrAlphabet.indexOf(indexKey)) % 26)]);
        count++;
      } else {
        arrAnswer.push(elem);
      }
    })
    return (this.type === true) ? arrAnswer.join('') : arrAnswer.reverse().join('');
  }

decrypt (string, key) {
    if (!string || !key) throw new Error('Error')

    const arrAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const arrString = string.toUpperCase().split('');
    const arrKey = key.toUpperCase().split('');
    let arrAnswer =[];
    let count = 0;

    arrString.forEach(elem => {
      if (arrAlphabet.indexOf(elem) != -1) {
        let indexKey = arrKey[count % arrKey.length];
        arrAnswer.push(arrAlphabet[((arrAlphabet.indexOf(elem) - arrAlphabet.indexOf(indexKey) + 26) % 26)]);
        count++;
      } else {
        arrAnswer.push(elem);
      }
    })
    return (this.type === true) ? arrAnswer.join('') : arrAnswer.reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
