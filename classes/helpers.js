function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const number = getRandomNumber(10, 100);

console.log(number);