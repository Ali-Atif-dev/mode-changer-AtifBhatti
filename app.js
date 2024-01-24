let modeBtn = document.querySelector("#mode");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
    if(currentMode == "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        modeBtn.textContent = "Light MOde";
    }else{
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        modeBtn.textContent = "Dark Mode";
        currentMode = "light";
    }
})