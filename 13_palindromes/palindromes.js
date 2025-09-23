const palindromes = function (string) {
    let alphabetNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        let start = string[left].toLowerCase();
        let end = string[right].toLowerCase();

        // Skip characters not in alphabetNumbers
        if (!alphabetNumbers.includes(start)) {
            left++;
            continue;
        }
        if (!alphabetNumbers.includes(end)) {
            right--;
            continue;
        }

        // Compare valid characters
        if (start !== end) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};




// Do not edit below this line
module.exports = palindromes;
