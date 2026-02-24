// Class representing one lesson
class Lesson {
    subject: string;
    time: string;

    constructor(subject: string,, time: string) {
        this.subject = subject;
        this.time = time;
    }

    getInfo(): string {
        return `${this.time} - ${this.subject}`;
    }
}

// Storage class that contains multiple Lesson objects
class Schedule {
    private lessons: Lesson[] = [];

    addLesson(lesson: Lesson): void {
        this.lessons.push(lesson);
    }

    getLessons(): Lesson[] {
        return this.lessons;
    }
}

// Demo application class
class App {
    schedule: Schedule;

    constructor() {
        this.schedule = new Schedule();
        this.addSampleLessons();
        this.connectButton();
    }

    // Add example lessons
    addSampleLessons(): void {
        this.schedule.addLesson(new Lesson("Mathematics", "8:30"));
        this.schedule.addLesson(new Lesson("English", "09:30"));
        this.schedule.addLesson(new Lesson("History", "10:30"));
    }

    // Connect button to event
    connectButton(): void {
        const btn = document.getElementById("showBtn");
        btn?.addEventListener("click", () => this.showSchedule());
    }

    // Display schedule in HTML
    showSchedule(): void {
        const list = document.getElementById("scheduleList");
        if (!list) return;

        list.innerHTML = "";

        this.schedule.getLessons().forEach(lesson => {
            const li = document.createElement("li");
            li.textContent = lesson.getInfo();
            list.appendChild(li);
        });
    }
}

// Start the application
new App();