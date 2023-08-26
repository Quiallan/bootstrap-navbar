const modeSwitch = document.querySelector(".mode-switch");
const logo = document.querySelector(".logo");

let darkMode = false;

modeSwitch.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.add("dark-mode");
        modeSwitch.src = "https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000_1280.png";
    } else {
        document.body.classList.remove("dark-mode");
        modeSwitch.src = "https://cdn.pixabay.com/photo/2012/04/18/13/25/light-switch-37017_1280.png";
    }
});
