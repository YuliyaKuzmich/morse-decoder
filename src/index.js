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
    // write your solution here
    let result = '' ;
    let midResult = expr.match(/.{1,10}/g);

    midResult.forEach(element => {
        if (element === '**********') {
            result += ' ';
        } else {
            const mid2 = element.match(/.{1,2}/g);
            let newStr = '';
            mid2.forEach(elem => {
                if (elem === '10') {
                    newStr += '.';
                } else if (elem === '11') {
                    newStr += '-';
                } 
            } )
            result += MORSE_TABLE[newStr];
        }   
    });

    return result;
}

module.exports = {
    decode
}