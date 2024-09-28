const a = 5; 
const b = 3;
const c = 5;

if (a === b && b === c) {
    console.log("The triangle is equilateral");
} else if (a === b || b === c || a === c) {
    console.log("The triangle is isosceles.");
} else {
    console.log("The triangle is scalene.");
}
