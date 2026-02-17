class Student{
    constructor(protected mathGrade:number, protected englishGrade:number){}

    // This method is to show the grades
    show(): void{
        console.log(this.mathGrade, this.englishGrade);
    }
    // Calculate the average
    avg(): number{
        return (this.mathGrade + this.englishGrade) / 2;
    }
    // Calculate the average of math grade based on the count
    avgMath(count:number): number{
        return this.mathGrade / count;
    }
    // Receive another Student:Object and add the grades together
    add(other:Student):Student{
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    }
    // Improve math grade by 5 points
    improveMath(): void{
        this.mathGrade += 5;
    }
}

let s1: Student = new Student(70, 92);
let s2: Student = new Student(56, 80);

// Array of students
let students: Student[] = [
    new Student(80, 85),
    new Student(90, 88),
    new Student(75, 80),
    new Student(85, 90)
] 

// Combine all students into one total
let classTotal = students[0]; // Start with the first student, then add the rest of the students to it
for(let i = 1; i < students.length; i++){ // Start from 1 because we already have the first student in classTotal
    classTotal = classTotal.add(students[i]); // Add each student to the classTotal
}

// Number of students in the class
const n = students.length
console.log('Class average math grade:', classTotal.avgMath(n)); // Calculate the average math grade for the class by using 'n' (student count) from the previous function for division

// console.log(s1.mathGrade); won't work because mathGrade is protected, we can only access it through methods (show, avg, etc.)
s1.show();
console.log('The average is: ' + s1.avg());
s2.show();
console.log('The average is: ' + s2.avg());

// Test: adding other student grades
let combined = s1.add(s2);
combined.show();
console.log('The average of combined math grade is: ' + combined.avgMath(2));

// Test: improving math grade
s1.improveMath();
s1.show();