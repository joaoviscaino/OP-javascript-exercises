const sumAll = function(x, y) {
    let sum = 0;
    /* for loop that will run the amount of numbers setting them apart 
        Sum begins with x  
                            */
    if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number'
        || !Number.isInteger(x) || !Number.isInteger(y)
    ) return 'ERROR';
    if (x > y) {
        //x = [y, y = x][0]; // I cannot believe this is allowed.
        // this is more readable. The above expression is WILD and does all sorts of things in one line, wth
        [x, y] = [y, x];
    }
        for (let i = x; i <= y; i++) {
            sum += i;
        }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
