const { NotImplementedError } = require('../lib');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.run(message, key, false);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.run(message, key, true);
  }

  run(input, key, decrypt) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const upperMsg = String(input).toUpperCase();
    const upperKey = String(key).toUpperCase();

    let result = '';
    let idx = 0;

    for (let i = 0; i < upperMsg.length; i++) {
      const ch = upperMsg[i];
      const code = ch.charCodeAt(0);

      if (code >= A && code <= Z) {
        const m = code - A;
        const keyChar = upperKey[idx % upperKey.length];
        const keyCode = keyChar.charCodeAt(0);

        if (keyCode < A || keyCode > Z) {
          result += ch;
          continue;
        }

        const shift = keyCode - A;

        const enc = decrypt
          ? (m - shift + 26) % 26
          : (m + shift) % 26;

        result += String.fromCharCode(enc + A);
        idx++;
      } else {
        result += ch;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}
module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
