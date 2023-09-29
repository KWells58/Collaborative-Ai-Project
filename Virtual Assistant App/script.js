//toggle darkmode
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');

//event listener for dark mode toggle
darkModeToggle.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
})
