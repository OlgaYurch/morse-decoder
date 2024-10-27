const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morseCodes = [];

  for (let i = 0; i < expr.length; i += 10) {
    const letterCode = expr.slice(i, i + 10);
    if (letterCode === '<strong></strong><strong></strong><strong>') {
      morseCodes.push(' ');
        } else {
          let morseChar = '';
          for (let j = 0; j < letterCode.length; j += 2) {
            const code = letterCode.slice(j, j + 2);
            if (code === '10') {
              morseChar += '.';
              } else if (code === '11') {
                morseChar += '-';
                }
            }
            morseCodes.push(morseChar);
        }
    }
    return morseCodes.map(code => {
      if (code === ' ') {
        return ' ';
        }
        return MORSE_TABLE[code] || '';
    }).join('');
}

module.exports = {
    decode
}