const repeatString = function(word, number_of_repeats) {
    if (number_of_repeats < 0) return "ERROR";
    let word_to_print = '';
    for (let i = 0; i < number_of_repeats; i++) {
        word_to_print += word
    }
    return word_to_print;
};

// Do not edit below this line
module.exports = repeatString;