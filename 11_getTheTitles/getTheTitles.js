const getTheTitles = function(books) {
    // working with an array of objects (JSON)
    const titles = books.map((book) => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
