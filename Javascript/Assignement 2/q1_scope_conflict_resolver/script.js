
 // Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only for permanent employees
    if (isPermanent) {
        salary += bonus;
    }

    console.log("Total Salary: ₹" + salary);
    console.log("Global Bonus: ₹" + bonus);
}

// Call the function
calculateSalary();
