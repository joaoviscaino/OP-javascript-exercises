/*
const removeFromArray = function(arr, ...elements) {
    elements.forEach(element => {
        // where were that element in arr, as index
        const index = arr.indexOf(element);
        if (index > -1)
            arr.splice(index, 1); 
    });
    return arr;
};  
*/

/* WE COULD ALSO USE THE FILTER METHOD */

const removeFromArray = function(arr, ...elements) {    
    return arr = arr.filter(x => !elements.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
