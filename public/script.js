const bodyDom = document.getElementById("bodyDom");
const timeDom = document.getElementById("timeDom");

const join = document.getElementById("join");
const joinDiv = document.getElementById("joinDiv");
const create = document.getElementById("create");
const createDiv = document.getElementById("createDiv");
const darkBackground = document.getElementById("darkBackground");
const dailyChallenge = document.getElementById("dailyChallenge");
const dailyTitle = document.getElementById("dailyTitle");
const descriptionBtn = document.getElementById("descriptionBtn");
const dailyDescription = document.getElementById("dailyDescription");
const picture = document.getElementById("picture");

if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    location.replace("wrongDevice.html")
}

var today = new Date();
var time = today.getHours() 
var timeLeft = String(24-time)
var hourCase = "hours"
if (timeLeft=="1"){
    hourCase = "hour"
}
timeDom.innerText = timeLeft+" "+hourCase +" left";


join.addEventListener("click", () => {
    joinDiv.style.display = "block"
    darkBackground.style.display = "block"
});

darkBackground.addEventListener("click", () => {
    joinDiv.style.display = "none"
    createDiv.style.display = "none"
    darkBackground.style.display = "none"

});

create.addEventListener("click", () => {
    createDiv.style.display = "block"
    darkBackground.style.display = "block"

});

var state = true

dailyChallenge.addEventListener("click", () => {
    if (state){
        dailyTitle.innerText = "Challenge Description:"
        timeDom.style.display = "none"
        picture.style.display = "block"
        descriptionBtn.innerText = "←"
        dailyDescription.innerText = "When appliances are off but still connected to a power source, they silently drain electricity resulting in electricity being wasted and bigger electricity bills. "
        state = false
    } else if (!state){
        dailyTitle.innerText = "Daily Challenge"
        timeDom.style.display = "block"
        picture.style.display = "none"
        descriptionBtn.innerText = "→"
        dailyDescription.innerText = "Unplug all unused appliances at home."
        state = true
    }

});