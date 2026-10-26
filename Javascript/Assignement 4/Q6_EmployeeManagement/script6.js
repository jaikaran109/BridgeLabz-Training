"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
            throw new RangeError("Bonus must be between 0 and 100 percent.");
        }

        this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
    }
}

const employees = [
    new Employee("E-101", "Asha", "Engineering", 72000),
    new Employee("E-102", "Rohan", "Marketing", 58000),
    new Employee("E-103", "Meera", "Finance", 64000),
    new Employee("E-104", "Kabir", "Human Resources", 52000),
    new Employee("E-105", "Nisha", "Engineering", 81000)
];

const employeeList = document.querySelector("#employee-list");
const annualPayout = document.querySelector("#annual-payout");
const employeeMessage = document.querySelector("#employee-message");

function formatEmployeeCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);
}

function renderEmployees() {
    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th scope="col">Employee</th>
                <th scope="col">Department</th>
                <th scope="col">Monthly salary</th>
                <th scope="col">Annual salary</th>
            </tr>
        </thead>
    `;
    const body = document.createElement("tbody");

    for (const employee of employees) {
        const row = document.createElement("tr");
        const values = [
            `${employee.name} (${employee.id})`,
            employee.department,
            formatEmployeeCurrency(employee.salary),
            formatEmployeeCurrency(employee.getAnnualSalary())
        ];
        for (const value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.append(cell);
        }
        body.append(row);
    }

    table.append(body);
    employeeList.replaceChildren(table);
    const totalPayout = employees.reduce(
        (total, employee) => total + employee.getAnnualSalary(),
        0
    );
    annualPayout.textContent = `Total annual company payout: ${formatEmployeeCurrency(totalPayout)}`;
}

document.querySelector("#bonus-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const percent = Number(document.querySelector("#bonus-percent").value);

    if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
        employeeMessage.textContent = "Enter a bonus from 0 to 100 percent.";
        employeeMessage.classList.add("message--error");
        return;
    }

    for (const employee of employees) {
        employee.applyBonus(percent);
    }
    employeeMessage.textContent = `${percent}% bonus applied to all employees.`;
    employeeMessage.classList.remove("message--error");
    renderEmployees();
});

renderEmployees();
