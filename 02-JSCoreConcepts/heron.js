// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = () => `Pole trójkąta o bokach ${b}, ${c} oraz ${h} wynosi ` +
    `${Math.sqrt(((b + c + h) * (b + c - h) * (b - c + h) * (-b + c + h)) / 4)}`;

console.log(a());