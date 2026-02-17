class lessonPlan {
    private title: string;
    private duration: number; // in minutes
    private dayOfWeek: string;

    constructor(title: string, duration: number, dayOfWeek: string) {
        this.title = title;
        this.duration = duration;
        this.dayOfWeek = dayOfWeek; 
    }

    getTitle(): string {
        return this.title;
    }

    getDuration(): number {
        return this.duration;
    }

    getDayOfWeek(): string {
        return this.dayOfWeek;
    }
}

// Creating lessons for math and english with a duration of 75 minutes each
let Monday = new lessonPlan("Math", 75, "Monday");
let Tuesday = new lessonPlan("English", 75, "Tuesday");
let Wednesday = new lessonPlan("Programming", 75, "Wednesday");
let Thursday = new lessonPlan("Physics", 75, "Thursday");
let Friday = new lessonPlan("Chemistry", 75, "Friday");

// Creating an array to hold the lessons
let weeklyLessons = [Monday, Tuesday, Wednesday, Thursday, Friday];

// Looping through the lessons and printing out their details
for (let lesson of weeklyLessons) {
    console.log(`${lesson.getDayOfWeek()}: ${lesson.getTitle()}, Duration: ${lesson.getDuration()} minutes`);
}