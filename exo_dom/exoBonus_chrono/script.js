
let time_min = 0;
let time_sec = 0;
let onplay;

const minDisplay = document.getElementById('min-display');
const secDisplay = document.getElementById('sec-display');

function play(){
    if(!onplay){
        onplay = setInterval(() => {
            if(++time_sec >= 60){
                time_sec-=60;
                time_min++;
            }
            updateTimeDisplay();
        },1000);
        updateBtnDisabled();
    }
}

function pause(){
    if(onplay){
        clearInterval(onplay);
        onplay = null;
        updateBtnDisabled();
    }

}

function reset(){
    if(!onplay && (time_min != 0 || time_sec != 0)){
        time_min = 0;
        time_sec = 0;
        updateTimeDisplay();
        updateBtnDisabled();
    }

}

function updateTimeDisplay(){
    minDisplay.innerText = time_min<10 ? '0'+time_min : time_min;
    secDisplay.innerText = time_sec<10 ? '0'+time_sec : time_sec;
}

function updateBtnDisabled(){
    const btns = document.getElementById("btn-rack").children; 
    btns[0].disabled = onplay ? true:false;
    btns[1].disabled = !onplay ? true:false;
    btns[2].disabled = onplay || (time_min==0 && time_sec==0) ? true:false;
}

