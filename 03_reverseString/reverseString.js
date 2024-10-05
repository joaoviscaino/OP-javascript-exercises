const reverseString = function(string) {
    let reversed= '';
    if (string.length > 0) {
        for (let i = string.length - 1; i >= 0; i--) {
            reversed += string[i];
        }
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
