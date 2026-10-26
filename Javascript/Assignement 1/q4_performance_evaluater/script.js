
// Marks obtained in five subjects
let marks = [90, 85, 78, 88, 92];

let totalMarks = 0;
let isFailed = false;

// Calculate total and check if any subject is below 35
for (let mark of marks) {
    totalMarks += mark;

    if (mark < 35) {
        isFailed = true;
    }
}

// Calculate average and percentage
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

// Display academic details
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Evaluate academic performance
if (isFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
