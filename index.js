// Reference of id time and class childContainer
const updateTime = document.getElementById('time');
const childContainer = document.querySelector(".childContainer");

let startCount = 0;
let intervalId;


// Functions for onclick event

const handleStartButton = ()=>{

    intervalId = setInterval(()=>{
        updateTime.innerText = startCount++;
    },1000);
};

const handleStopButton = ()=>{
    clearInterval(intervalId);
};

const handleResetButton = ()=>{
    clearInterval(intervalId);
    startCount = 0;
    updateTime.innerText = startCount;
};

const handleGetTimeButton = ()=>{
    const newPara = document.createElement("p");
    newPara.innerText = `The Stop time is ${startCount}`;
    newPara.style.color = "Black";
    childContainer.append(newPara);
};


const handleClearTimeButton = ()=>{
    childContainer.innerHTML = "";
};

// Event Listners for click event

document.getElementById('start').addEventListener('click',handleStartButton);

document.getElementById('stop').addEventListener('click',handleStopButton);

document.getElementById('reset').addEventListener('click',handleResetButton);

document.getElementById('getTime').addEventListener('click',handleGetTimeButton);

document.getElementById('clearTime').addEventListener('click',handleClearTimeButton);