const palindromes = function (text) {
    // remove punctuation then spaces
    let punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let spaceless = punctuationless.replace(/\s+/g, '');

    // split and reverse the string
    let newText = spaceless.split("").join("");
    let reversedText = spaceless.split("").reverse().join("");

    // check equivalency
    if (newText === reversedText) {return true;}
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
