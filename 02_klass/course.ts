class Course{
    constructor(protected credits:number){}
    // Method including the formula to calculate the GPA  
    // Formula is : Grade * Credits
    gpaContribution(grade:number): number{
        return grade * this.credits;
    }
    getCredits(): number{
        return this.credits;
    }   
}

// Here I am defining the courses and credits
let math = new Course(4);
let english = new Course(6);
let programming = new Course(2);

// Variables with grades for each course
let mathGrade = 4.0;
let englishGrade = 3.3;
let programmingGrade = 3.7;

// Begin adding up the total points for all courses
let totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);

// Total credits for all courses
let totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();

// Calculate the overall GPA
let finalGPA = totalPoints / totalCredits;
console.log('My GPA:', finalGPA.toFixed(2));

// Create an array to pass grades of several students
let studentsGrades = [
    {name:"Alice", math: 3.5, english: 3.3, programming: 3.7},
    {name:"Bob", math: 3.0, english: 3.3, programming: 2.7},
    {name:"Clara", math: 3.3, english: 3.8, programming: 3.2}
];

// Create a loop to calculate the GPA for each student
for (let student of studentsGrades){ // Taking each student from the array one by one
    let totalPoints = 0;

    // Begin adding up the total points for all courses for the student
    totalPoints += math.gpaContribution(student.math);
    totalPoints += english.gpaContribution(student.english);
    totalPoints += programming.gpaContribution(student.programming);
    // Calculate the overall GPA for the student, total credits has already been calculated before and they are a fixed number, so we can just use it here
    let GPA = totalPoints / totalCredits;
    console.log(student.name + " GPA: " + GPA.toFixed(2));
}
