
let scores = [];

// Generate 8 random scores between 30 and 100
for (let i = 0; i < 8; i++) {
    let score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Find highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Calculate total and average
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Filter students who passed
let passedStudents = scores.filter(score => score >= 50);

// Use map to display formatted scores
let formattedScores = scores.map(score => "Score: " + score);

// Display the summary
console.log("All Scores:", formattedScores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedStudents.length);
