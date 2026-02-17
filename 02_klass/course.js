var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    // Method including the formula to calculate the GPA  
    // Formula is : Grade * Credits
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
// Here I am defining the courses and credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(2);
// Variables with grades for each course
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 3.7;
// Begin adding up the total points for all courses
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
// Total credits for all courses
var totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();
// Calculate the overall GPA
var finalGPA = totalPoints / totalCredits;
console.log('My GPA:', finalGPA.toFixed(2));
// Create an array to pass grades of several students
var studentsGrades = [
    { name: "Alice", math: 3.5, english: 3.3, programming: 3.7 },
    { name: "Bob", math: 3.0, english: 3.3, programming: 2.7 },
    { name: "Clara", math: 3.3, english: 3.8, programming: 3.2 }
];
// Create a loop to calculate the GPA for each student
for (var _i = 0, studentsGrades_1 = studentsGrades; _i < studentsGrades_1.length; _i++) { // Taking each student from the array one by one
    var student = studentsGrades_1[_i];
    var totalPoints_1 = 0;
    // Begin adding up the total points for all courses for the student
    totalPoints_1 += math.gpaContribution(student.math);
    totalPoints_1 += english.gpaContribution(student.english);
    totalPoints_1 += programming.gpaContribution(student.programming);
    // Calculate the overall GPA for the student, total credits has already been calculated before and they are a fixed number, so we can just use it here
    var GPA = totalPoints_1 / totalCredits;
    console.log(student.name + " GPA: " + GPA.toFixed(2));
}
