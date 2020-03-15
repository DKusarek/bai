class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname.toUpperCase()}`;
    }
    getInitials() {
        return `${this.name.charAt(0)}.${this.surname.charAt(0)}.`;
    }
}

const person_1 = new Person("Jan", "Nowak");
console.log(person_1.getFullName());
console.log(person_1.getInitials());
console.log();

const person_2 = new Person("Dominika", "Kusarek");
console.log(person_2.getFullName());
console.log(person_2.getInitials());
console.log();