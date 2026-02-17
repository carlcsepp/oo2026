var lessonPlan = /** @class */ (function () {
    function lessonPlan(title, duration, dayOfWeek) {
        this.title = title;
        this.duration = duration;
        this.dayOfWeek = dayOfWeek;
    }
    lessonPlan.prototype.getTitle = function () {
        return this.title;
    };
    lessonPlan.prototype.getDuration = function () {
        return this.duration;
    };
    lessonPlan.prototype.getDayOfWeek = function () {
        return this.dayOfWeek;
    };
    return lessonPlan;
}());
// Creating lessons for math and english with a duration of 75 minutes each
var Monday = new lessonPlan("Math", 75, "Monday");
var Tuesday = new lessonPlan("English", 75, "Tuesday");
var Wednesday = new lessonPlan("Programming", 75, "Wednesday");
var Thursday = new lessonPlan("Physics", 75, "Thursday");
var Friday = new lessonPlan("Chemistry", 75, "Friday");
// Creating an array to hold the lessons
var weeklyLessons = [Monday, Tuesday, Wednesday, Thursday, Friday];
// Looping through the lessons and printing out their details
for (var _i = 0, weeklyLessons_1 = weeklyLessons; _i < weeklyLessons_1.length; _i++) {
    var lesson = weeklyLessons_1[_i];
    console.log("".concat(lesson.getDayOfWeek(), ": ").concat(lesson.getTitle(), ", Duration: ").concat(lesson.getDuration(), " minutes"));
}
