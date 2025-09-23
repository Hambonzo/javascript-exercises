const fibonacci = function(number) {
    if(number < 0) {
        return("OOPS");
    }
    if(typeof number === "string"){
        number = +number;
    }

    let arr = [1,1,2,3,5,8];
    for(let i = 6; i <= 25; i++) {
        let newVal = (arr[arr.length - 1]) + (arr[arr.length - 2]);
        arr.push(newVal);
    }
    return arr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
