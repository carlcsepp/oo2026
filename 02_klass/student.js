var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    // This method is to show the grades
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    // Calculate the average
    Student.prototype.avg = function () {
        return (this.mathGrade + this.englishGrade) / 2;
    };
    // Calculate the average of math grade based on the count
    Student.prototype.avgMath = function (count) {
        return this.mathGrade / count;
    };
    // Receive another Student:Object and add the grades together
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    // Improve math grade by 5 points
    Student.prototype.improveMath = function () {
        this.mathGrade += 5;
    };
    return Student;
}());
var s1 = new Student(70, 92);
var s2 = new Student(56, 80);
// Array of students
var students = [
    new Student(80, 85),
    new Student(90, 88),
    new Student(75, 80),
    new Student(85, 90)
];
// Combine all students into one total
var classTotal = students[0]; // Start with the first student, then add the rest of the students to it
for (var i = 1; i < students.length; i++) { // Start from 1 because we already have the first student in classTotal
    classTotal = classTotal.add(students[i]); // Add each student to the classTotal
}
// Number of students in the class
var n = students.length;
console.log('Class average math grade:', classTotal.avgMath(n)); // Calculate the average math grade for the class by using 'n' (student count) from the previous function for division
// console.log(s1.mathGrade); won't work because mathGrade is protected, we can only access it through methods (show, avg, etc.)
s1.show();
console.log('The average is: ' + s1.avg());
s2.show();
console.log('The average is: ' + s2.avg());
// Test: adding other student grades
var combined = s1.add(s2);
combined.show();
console.log('The average of combined math grade is: ' + combined.avgMath(2));
// Test: improving math grade
s1.improveMath();
s1.show();
