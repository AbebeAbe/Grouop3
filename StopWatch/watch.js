let hours=0;
let minutes=0;
let seconds=0;
let miliseconds=0;
let interval;
function startStopwatch(){
    interval=setInterval(function(){
        miliseconds +=10;

        if(miliseconds==1000){
            seconds++;
            miliseconds=0;
        }

        if(seconds==60){

        
        minutes++;
        seconds=0;}
        if(minutes==60){
            hours++;
            minutes=0;
        }
        document.getElementById('hours').innerHTML=formatTime(hours);
        document.getElementById('minutes').innerHTML=formatTime(minutes);
        document.getElementById('seconds').innerHTML=formatTime(seconds);
        document.getElementById('miliseconds').innerHTML=formatTime(miliseconds);


    },10)
}
function pauseStopwatch(){
    clearInterval(interval);

}
function resetStopwatch(){
    clearInterval(interval);
    hours=0;
    minutes=0;
    seconds=0;
    miliseconds=0;

    document.getElementById('hours').innerHTML=formatTime(hours);
    document.getElementById('minutes').innerHTML=formatTime(minutes);
    document.getElementById('seconds').innerHTML=formatTime(seconds);
    document.getElementById('miliseconds').innerHTML=formatTime(miliseconds);


}
function formatTime(time){
    if(time<10){
        return '0' + time;
    }
    else
    {
        return time;
    }

}
