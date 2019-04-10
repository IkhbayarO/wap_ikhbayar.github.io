/* Question: 1 */
String.prototype.filter = function (names) {
    let strArray = this.toString().split(" ");

    for (let i = 0; i < strArray.length; i++) {
        for (let j = 0; j < names.length; j++) {
            if (strArray[i] === names[j]) {
                for (let k = i; k < strArray.length; k++) {
                    strArray[k] = strArray[k + 1];
                }
                i--;
            }
        }
    }
    let res = [];
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] !== undefined) {
            res[i] = strArray[i];
        }
    }
    return res.join(" ");
};
console.log("This house is not nice!".filter(['not', "This"]));


/* Question: 2 */


let bayaData = [8, 4, 0, 3, -2, 1];
Array.prototype.bubbleSort = function () {
    let myArray = this;
    myArray.sort(function (a, b) {
        return a - b;
    });
    return myArray;
}
console.log(bayaData.bubbleSort());

/* Question: 3 */

/* Using function constructor */
function Person1(name) {
    this.name = name;


}

const Teacher = new Person1("Tina");
Person1.prototype.teach = function (subject) {
    return this.name + " is teaching " + subject;
}

console.log(Teacher.teach("WAP"));

/* Using object create */
const person = {
    name: "Tina",
    teach: function (subject) {
        return this.name + " is teaching " + subject;
    }

}
const Teacher2 = Object.create(person);
console.log(Teacher2.teach("WAP_CS472"));

/*Question 4 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
    }

    salute() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greeting() {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    }
}

class Professor extends Person {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }

    greeting() {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
    }
}

const studentObject = new Student("Baya", 100, "CS");
studentObject.greeting();
studentObject.salute();

const professorObject = new Professor("Tina", 100, "CSD");
professorObject.greeting();
professorObject.salute();

/* Using function constructor approach for inheritance*/
function PersonFC(name, age) {
    this.name = name;
    this.age = age;
}

PersonFC.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
}
PersonFC.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
}

function StudentFC(name, age, major) {
    PersonFC.call(this, name, age);
    this.major = major;
}

StudentFC.prototype = Object.create(PersonFC.prototype);
StudentFC.prototype.greeting = function () {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

function ProfessorFC(name, age, department) {
    PersonFC.call(this, name, age);
    this.department = department;
}
ProfessorFC.prototype=Object.create(PersonFC.prototype);
ProfessorFC.prototype.greeting=function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
}

const studentFC=new StudentFC("Baya2", 30, "CScience");
studentFC.greeting();
studentFC.salute();

const profFC=new ProfessorFC("Tina2", 30, "CSDep");
profFC.greeting();
profFC.salute();