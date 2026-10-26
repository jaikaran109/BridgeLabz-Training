"use strict";

(() => {
    function PrototypePerson(name) {
        this.name = name;
    }

    PrototypePerson.prototype.introduce = function introduce() {
        return `My name is ${this.name}.`;
    };

    function PrototypeStudent(name, branch) {
        PrototypePerson.call(this, name);
        this.branch = branch;
    }

    PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
    PrototypeStudent.prototype.constructor = PrototypeStudent;
    PrototypeStudent.prototype.showBranch = function showBranch() {
        return `I study ${this.branch}.`;
    };

    class ClassPerson {
        constructor(name) {
            this.name = name;
        }

        introduce() {
            return `My name is ${this.name}.`;
        }
    }

    class ClassStudent extends ClassPerson {
        constructor(name, branch) {
            super(name);
            this.branch = branch;
        }

        showBranch() {
            return `I study ${this.branch}.`;
        }
    }

    const prototypeStudent = new PrototypeStudent("Maya", "Computer Science");
    const classStudent = new ClassStudent("Maya", "Computer Science");

    document.querySelector("#compare-inheritance").addEventListener("click", () => {
        const prototypeResult = [
            prototypeStudent.introduce(),
            prototypeStudent.showBranch()
        ];
        const classResult = [
            classStudent.introduce(),
            classStudent.showBranch()
        ];
        const sameBehavior = prototypeResult.join(" ") === classResult.join(" ");

        document.querySelector("#class-output").textContent = [
            `Constructor/prototype: ${prototypeResult.join(" ")}`,
            `ES6 classes: ${classResult.join(" ")}`,
            `Same behavior: ${sameBehavior}`
        ].join("\n");
    });
})();
