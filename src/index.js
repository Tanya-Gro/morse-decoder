const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = '', codeLetter = '';

    for (let i = 0; i < expr.length; i += 10)
        if (expr[i] === '*')
            result += ' ';
        else {
            for (let j = 8; j >= 0; j -= 2) {
                if (expr[i + j] === '0') {
                    break;
                }
                if (expr[i + j] === '1')
                    if (expr[i + j + 1] === '1')
                        codeLetter = '-' + codeLetter;
                    else
                        codeLetter = '.' + codeLetter;
            }
            result += MORSE_TABLE[codeLetter];
            codeLetter = '';
        }
    return result;
}

module.exports = {
    decode
}
