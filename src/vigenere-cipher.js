class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    buildKey(messageArr, key) {
        let keyArr = [];
        let keyCharIndex = 0;
        for (let i = 0; i < messageArr.length; i++) {
            if (messageArr[i].charCodeAt() < 65 || messageArr[i].charCodeAt() > 90) {
                keyArr.push(messageArr[i]);

            } else {
                keyArr.push(key[keyCharIndex]);
                keyCharIndex++;
            }
            if (keyCharIndex == key.length) {
                keyCharIndex = 0;
            }
        }
        return keyArr;
    }
    encrypt(message, key) {
        if (!message || !key) throw new Error()
        message = message.toUpperCase().split('');
        key = this.buildKey(message, key.toUpperCase())
        let result = []; 

        for (let i = 0; i < message.length; i++) {
            if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
                result.push(message[i])
            } else {
                let char = (message[i].charCodeAt() - 65 + key[i].charCodeAt() - 65) % 26 + 65;
                result.push(String.fromCharCode(char))
            }
        }
        return this.direct ? result.join('') : result.reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error()
        message = message.toUpperCase().split('');
        key = this.buildKey(message, key.toUpperCase())
        let result = [];

        for (let i = 0; i < message.length; i++) {
            if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
                result.push(message[i])
            } else {
                let char = ((message[i].charCodeAt() - 65) + 26 - (key[i].charCodeAt() - 65)) % 26 + 65;
                result.push(String.fromCharCode(char))
            }
        }
        return this.direct ? result.join('') : result.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
