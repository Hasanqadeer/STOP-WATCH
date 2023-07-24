const clockf = document.querySelector(".clock");
let second = 0,
minute=0,
hour=0,myintervel;

const start = () =>{
    
    myintervel = setInterval(() =>{
       if(second < 59){
         second++;
        console.log(second);
       }
       else if(minute >= 59){

         hour++;
         minute=0;
       }
       else{
        second=0;
        min++;
       }
      const sec = second.toString().padStart(2,"0");
      const min = minute.toString().padStart(2,"0");
      const hr = hour.toString().padStart(2,"0");
      clockf.innerHTML = `${hr}:${min}:${sec}`;
     
    },1000)
}
const stop = () =>{
    clearInterval(myintervel);
}