names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.studentsList = names;
    }

    startWith(letter){
        // names (array) which starts with the letter
        let newStudentsList = this.studentsList.filter(x=>x.charAt(0)== letter);
        return new Students(newStudentsList);
    }

    sort() {        
        // names (array) in alphabetical order 
        let newStudentsList =  Array.from(this.studentsList).sort();
        return new Students(newStudentsList);    
    }

    get() {
        // names (array) in natural order
        return new Students(this.studentsList);
    }

    getFirst(n) {
        // get first 'n' names (array) 
        let newStudentsList =   this.studentsList.slice(0,n);
        return new Students(newStudentsList);
        
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



