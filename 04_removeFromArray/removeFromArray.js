const removeFromArray = function(array, ...itemsToRemove) {
    const newArray = [];
    // for each item in the array argument, check against the itemsToRemove arguments
    // if the item matches an itemToRemove, it doesn't get copied into the newArray, else it does
    array.forEach(item => {
        if (!itemsToRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;