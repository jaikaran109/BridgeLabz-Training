"use strict";

(() => {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.describePerson = function describePerson() {
        return `Person: ${this.name}`;
    };

    function Faculty(name, department) {
        Person.call(this, name);
        this.department = department;
    }

    Faculty.prototype = Object.create(Person.prototype);
    Faculty.prototype.constructor = Faculty;
    Faculty.prototype.describeFaculty = function describeFaculty() {
        return `Faculty department: ${this.department}`;
    };

    function Professor(name, department, subject) {
        Faculty.call(this, name, department);
        this.subject = subject;
    }

    Professor.prototype = Object.create(Faculty.prototype);
    Professor.prototype.constructor = Professor;
    Professor.prototype.describeProfessor = function describeProfessor() {
        return `Professor subject: ${this.subject}`;
    };

    const professor = new Professor("Dr. Sen", "Computer Science", "JavaScript");

    document.querySelector("#show-professor").addEventListener("click", () => {
        document.querySelector("#professor-output").textContent = [
            professor.describePerson(),
            professor.describeFaculty(),
            professor.describeProfessor(),
            `Prototype chain: ${professor instanceof Professor && professor instanceof Faculty && professor instanceof Person}`
        ].join("\n");
    });
})();
