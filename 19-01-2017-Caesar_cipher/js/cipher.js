var alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ&!.?/|{][}"\',;:%$#*^<>@1234567890()№-_=+ ';
var alphabetEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&!.?/|{][}"\',;:%$#*^<>@1234567890()№-_=+ ';
var lang; // if true russian lang
function newAlphabet(shift, message) {
    var newAlphabet = '';
    lang = /[а-я]/i.test(message);
    if (lang) {
        for (var i = 0; i < alphabet.length; i++) {
            if (alphabet[i + shift] === undefined) {
                current = alphabet[i + shift - alphabet.length];
            } else {
                current = alphabet[i + shift];
            }
            newAlphabet = newAlphabet.concat(current);
        }
    } else {
        for (var i = 0; i < alphabetEN.length; i++) {
            if (alphabetEN[i + shift] === undefined) {
                current = alphabetEN[i + shift - alphabetEN.length];
            } else {
                current = alphabetEN[i + shift];
            }
            newAlphabet = newAlphabet.concat(current);
        }
    }
    return newAlphabet;
}


function encrypt() {
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var newAlphab = newAlphabet(shift, message);
    var encryptMessage = '';
    if (lang) {
        for (var i = 0; i < message.length; i++) {
            current = alphabet.indexOf(message[i].toUpperCase());
            encryptMessage = encryptMessage.concat(newAlphab[current])
        }
    } else {
        for (var i = 0; i < message.length; i++) {
            current = alphabetEN.indexOf(message[i].toUpperCase());
            encryptMessage = encryptMessage.concat(newAlphab[current])
        }
    }

    document.getElementById("cipher").value = encryptMessage.toLowerCase();
}

function decrypt() {
    var message = document.getElementById("cipher").value;
    var shift = parseInt(document.getElementById("shift").value);
    var newAlphab = newAlphabet(shift, message);
    var decryptMessage = '';
    if (lang) {
        for (var i = 0; i < message.length; i++) {
            current = newAlphab.indexOf(message[i].toUpperCase());
            decryptMessage = decryptMessage.concat(alphabet[current])

        }
    } else {
        for (var i = 0; i < message.length; i++) {
            current = newAlphab.indexOf(message[i].toUpperCase());
            decryptMessage = decryptMessage.concat(alphabetEN[current]);
        }
    }

    document.getElementById("decrip").value = decryptMessage.toLowerCase();
}
