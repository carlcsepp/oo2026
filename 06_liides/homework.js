// Get references to DOM elements
var toggleBtn = document.getElementById('toggleBtn');
var body = document.body;
// dlToggle class to handle light/dark mode
var dlToggle = /** @class */ (function () {
    function dlToggle() {
        this.isDark = false; // start in light mode
    }
    dlToggle.prototype.toggleTheme = function () {
        this.isDark = !this.isDark;
        // apply the correct class to the body
        body.className = this.isDark ? 'dark' : 'light';
        // update button text
        toggleBtn.textContent = this.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };
    return dlToggle;
}());
// create a dlToggle instance
var theme = new dlToggle();
// attach click event to button
toggleBtn.addEventListener('click', function () {
    theme.toggleTheme();
});
