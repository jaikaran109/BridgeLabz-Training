"use strict";

(() => {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.introduce = function introduce() {
        return `My name is ${this.name}.`;
    };

    function Student(name, branch) {
        Person.call(this, name);
        this.branch = branch;
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;
    Student.prototype.showBranch = function showBranch() {
        return `I study ${this.branch}.`;
    };

    const student = new Student("Maya", "Computer Science");

    document.querySelector("#show-student").addEventListener("click", () => {
        document.querySelector("#student-output").textContent =
            `${student.introduce()}\n${student.showBranch()}\nStudent inherits Person: ${student instanceof Student && student instanceof Person}`;
    });
})();
