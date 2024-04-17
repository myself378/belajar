const body= document.querySelector("body"),
hourHand= document.querySelector(".hour"),
minuteHand= document.querySelector(".minute"),
secondHand= document.querySelector(".second"),
modeSwitch= document.querySelector(".mode-switch");

if(localStorage.getItem("mode")=== "dark mode"){
    body.classList.add("dark");
    modeSwitch.textContent="light mode";
}

modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    const isDarkMode=body.classList.contains("dark");
    modeSwitch.textContent= isDarkMode? "light mode": "dark mode";
    localStorage.setItem("mode", isDarkMode? "dark mode": "light mode");
});

setInterval(updatetime,100);

updatetime();