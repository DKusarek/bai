const generateRandomData = () => {
    let array = [];
    let max = 20;
    let min = 5;
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
};

const showResult = (array) => {
    let str = "Random numbers: ";
    for (let item of array) {
        str += `${item} `;
    }
    return str;
};

console.log(showResult(generateRandomData()));
console.log();