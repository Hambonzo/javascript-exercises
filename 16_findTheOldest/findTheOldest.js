const findTheOldest = function (arr) {
    const currentYear = new Date().getFullYear()

    let oldest = arr.reduce((acc, person) => {
        let death;
        if (person.yearOfDeath === undefined) {
            death = currentYear;
        }
        else {
            death = person.yearOfDeath; 
        }
        const age = death - person.yearOfBirth;

        let accDeath;
        if (acc.yearOfDeath === undefined) {
            accDeath = currentYear;
        } else {
            accDeath = acc.yearOfDeath;
        }

        const accAge = accDeath - acc.yearOfBirth;

        if (age > accAge) {
            return person;
        } else {
            return acc;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
