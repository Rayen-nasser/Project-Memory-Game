var buttonStart = document.querySelector('.control-buttons span');
let dure = 120
let countDownIntervel 
let time = document.getElementById('time')
function counDown(duration){
      let minutes, seconds
      countDownIntervel = setInterval(function(){
          minutes = parseInt(duration / 60)
          seconds = parseInt(duration % 60)

          minutes = minutes < 10 ? `0${minutes}`:minutes
          seconds = seconds < 10 ? `0${seconds}`:seconds

          time.innerHTML = `${minutes}:${seconds}`

          if(--duration < 0){
              clearInterval(countDownIntervel)
              btn.click()
          }
      },1000)
    }


buttonStart.onclick = function() {
  
  clearInterval(dure);
  counDown(dure)
}
    
// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//       clearInterval(Interval);
//        Interval = setInterval(startTimer, 10);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       tens = "00";
//         seconds = "00";
//       appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }