const reverseString = function(phrase) {
if (phrase == null) return "ERROR";

const charactersInReverse = [];

for (let i = 0; i < phrase.length; i++) {
    charactersInReverse.unshift(phrase[i]);
}

let reversedPhrase = charactersInReverse.join("");
return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;
