//toggle darkmode
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');

//event listener for dark mode toggle
    darkModeToggle.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
    //Toggle between "Dark Mode and Light Mode" text
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
})
