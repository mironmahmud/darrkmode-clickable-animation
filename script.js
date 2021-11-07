

// variable declare
let themeScreen = document.querySelector('.theme-screen');
let toggleSwitch = document.querySelector('.toggle-switch');
let switchIcon = document.querySelector('.material-icons');
let getStorageKey = localStorage.getItem('themeScreen');


// dark functionality
function darkMode() {
    switchIcon.innerHTML = 'brightness_4';
    themeScreen.classList.add('dark-mode');
    localStorage.setItem('themeScreen', 'darkMode');
}

// light functionality
function lightMode() {
    switchIcon.innerHTML = 'brightness_5'
    themeScreen.classList.remove('dark-mode');
    localStorage.setItem('themeScreen', 'lightMode');
}

// page load condition
if(getStorageKey === 'darkMode') { darkMode(); }

// toggle switch event
toggleSwitch.addEventListener('click', () => {
    if(localStorage.getItem('themeScreen') !== 'darkMode') { darkMode(); }
    else { lightMode(); }
});

