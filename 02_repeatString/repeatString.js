const repeatString = function(word, numberOfRepeats) {
    if (numberOfRepeats < 0) return "ERROR";
    let wordToPrint = '';
    for (let i = 0; i < numberOfRepeats; i++) {
        wordToPrint += word
    }
    return wordToPrint;
};

// Do not edit below this line
module.exports = repeatString;