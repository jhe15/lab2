class StopWatch{
 constructor(){
    this.isRunning=false;
    this.timer= null;
    this.timerTime=0;
   this.startBtn=document.getElementById("start");
   this.stopBtn=document.getElementById("stop");
   this.resetBtn= document.getElementById("reset");

   this.startBtn.onclick= this.startTimer.bind(this);
   this.stopBtn.onclick=this.stopTimer.bind(this);
   this.resetBtn.onclick=this.resetTimer.bind(this);
   this.incrementTimer= this.incrementTimer.bind(this);
   this.pad=this.pad.bind(this);
 }

 startTimer() {

  
    if(this.isRunning==false){
        this.isRunning=true;
      this.timer=  setInterval(this.incrementTimer, 1000)
    }
}

 incrementTimer() {
   
    
    this.timerTime++;
    let minutes= Math.floor(this.timerTime/60);
    let  seconds=Math.floor(this.timerTime % 60);

    document.getElementById("minutes").innerHTML=this.pad(minutes);
    document.getElementById("seconds").innerText=this.pad(seconds);

}

 pad(number) {

    if(number<10)
    return "0"+ number;
    else  
        return number; 
   // return ( number<10) ? "0" + number: number; 
}

 stopTimer() {
   

    if(this.isRunning== true){

        this.isRunning=false;
        clearInterval(this.timer);

    }
    // if the timer is running, stop it by
        // set isRunning to false
        // call the function clearInterval to stop the timer
    // end if
}

resetTimer() {
   this.stopTimer();
   this.timerTime=0;
   document.getElementById("minutes").innerHTML=this.pad(0);
   document.getElementById("seconds").innerText=this.pad(0);
    // stop the timer by calling stopTimer
    // set the elapsedTime back to 0
    // write 00 to the elements on the page for minutes and seconds
}

// When the page has finished loading, call the function init



}

let stopwatch;
window.onload=()=>{stopwatch= new StopWatch();}