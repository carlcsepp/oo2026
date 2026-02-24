// Class representing one lesson
var Lesson = /** @class */ (function () {
    function Lesson(subject, time) {
        this.subject = subject;
        this.time = time;
    }
    Lesson.prototype.getInfo = function () {
        return "".concat(this.time, " - ").concat(this.subject);
    };
    return Lesson;
}());
// Storage class that contains multiple Lesson objects
var Schedule = /** @class */ (function () {
    function Schedule() {
        this.lessons = [];
    }
    Schedule.prototype.addLesson = function (lesson) {
        this.lessons.push(lesson);
    };
    Schedule.prototype.getLessons = function () {
        return this.lessons;
    };
    return Schedule;
}());
// Demo application class
var App = /** @class */ (function () {
    function App() {
        this.schedule = new Schedule();
        this.addSampleLessons();
        this.connectButton();
    }
    // Add example lessons
    App.prototype.addSampleLessons = function () {
        this.schedule.addLesson(new Lesson("Mathematics", "08:30"));
        this.schedule.addLesson(new Lesson("English", "09:30"));
        this.schedule.addLesson(new Lesson("History", "10:30"));
    };
    // Connect button to event
    App.prototype.connectButton = function () {
        var _this = this;
        var btn = document.getElementById("showBtn");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () { return _this.showSchedule(); });
    };
    // Display schedule in HTML
    App.prototype.showSchedule = function () {
        var list = document.getElementById("scheduleList");
        if (!list)
            return;
        list.innerHTML = "";
        this.schedule.getLessons().forEach(function (lesson) {
            var li = document.createElement("li");
            li.textContent = lesson.getInfo();
            list.appendChild(li);
        });
    };
    return App;
}());
// Start the application
new App();