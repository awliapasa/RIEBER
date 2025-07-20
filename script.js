const btn_start = document.getElementById("btn_start");
const btn_stop = document.getElementById("btn_stop");
const btn_reset = document.getElementById("btn_reset");
const timer = document.querySelector(".timer");
const btn_ready = document.querySelector(".home-button");

// Set initial total timer value to 10 minutes (600 seconds)
let total_timer = 600;

// Function to update the timer display
function update_timer() {
    const minutes = Math.floor(total_timer/60);
    const seconds = total_timer % 60;

    // Format to display timer as MM:SS
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

let interval;

// Function to start the timer
function startTimer() {
    interval = setInterval(() => {
        total_timer--;
        update_timer();

        // Check if timer has reached zero and stop the interval, 
        // play sound, and reset timer
        if(total_timer === 0){
        clearInterval(interval);
        playSound();
        }
    }, 1000)
}

// Function to stop the timer
function stopTimer(){
    clearInterval(interval);
}

// Function to reset the timer to 10 minutes
function resetTimer(){
    clearInterval(interval);
    total_timer=600;
    update_timer();
}

// Event listeners for button clicks
btn_start.addEventListener("click", startTimer)
btn_stop.addEventListener("click", stopTimer)
btn_reset.addEventListener("click", resetTimer)

// Function to play a sound when the timer reaches zero
function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const sound = audioContext.createBufferSource();

    // Load and decode the sound file asynchronously
    const loadSound = new Promise((resolve) => {
        const request = new XMLHttpRequest();
        request.open("GET", "news-ting-6832.mp3", true);
        request.responseType = "arraybuffer";
        request.onload = () => {
            resolve(audioContext.decodeAudioData(request.response));
        };
        request.send();
    });

        loadSound.then((buffer) => {
            sound.buffer = buffer;
            sound.connect(audioContext.destination);
            sound.start(0);
        
        setTimeout(() => {
            alert("Good Job! Time's up!");
            total_timer = 600;
            update_timer();
        }, 1000);
        });
    } 

btn_ready.addEventListener("click", () => {document.getElementById("timer-section").scrollIntoView({behavior:'smooth'})});