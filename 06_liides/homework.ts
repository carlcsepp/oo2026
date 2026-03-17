// Get references to DOM elements
const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;
const body = document.body;

// dlToggle class to handle light/dark mode
class dlToggle {
    private isDark: boolean;

    constructor() {
        this.isDark = false; // start in light mode
    }

    toggleTheme(): void {
        this.isDark = !this.isDark;

        // apply the correct class to the body
        body.className = this.isDark ? 'dark' : 'light';

        // update button text
        toggleBtn.textContent = this.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
}

// create a dlToggle instance
const theme = new dlToggle();

// attach click event to button
toggleBtn.addEventListener('click', () => {
    theme.toggleTheme();
});