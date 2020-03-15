title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

console.log(title + " " + name + " " + surname);
console.log("ul. " + street);
console.log(zip + " " + city);
console.log(country);
console.log();

let address_1 =
    `${title} ${name} ${surname}\n` +
    `ul. ${street}\n` +
    `${zip} ${city}\n` +
    `${country}`;

console.log(address_1);