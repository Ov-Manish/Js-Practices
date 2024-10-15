const secondsEL=document.getElementById("seconds");
const minutesEL=document.getElementById("minutes");
const hoursEL=document.getElementById("hours");
const DayANDNight=document.getElementById("dayOrNight");
const Loader=document.querySelector(".loader");
const clock=document.querySelector(".clock")


let previouHours;
// const AlarmSound=new Audio('Audio/old-clock-bell-27265.mp3');



function addZero(value) {
    value=Number(value);
    if (value<10) {
        return "0"+value
    }
    return value;
}
 setInterval(()=>{
    const date=new Date();
    const HOURS=addZero(date.getHours());
    const seconds=addZero(date.getSeconds());
    const minutes=addZero(date.getMinutes());
    let hours;
    let dayOrNight;
    function getTime() {
        if (date.getHours()>12) {
            hours=addZero(date.getHours()-12);
            dayOrNight="PM";
        }else{
            hours=addZero(date.getSeconds());
            dayOrNight="AM";
        }
    }
    // if (Number(minutes)>59 && Number(seconds>59)) {
    //     AlarmSound.play()
    // }
    getTime();
    hoursEL.innerHTML=HOURS;
    minutesEL.innerHTML=minutes;
    secondsEL.innerHTML=seconds;
    if (date.getHours() >= 18 || date.getHours() < 6) {
        document.body.classList.add("night");
    } 
    else {
        document.body.classList.remove("night");
    }

    clock.style.display="block";
    Loader.style.display="none";
    // DayANDNight.innerHTML=dayOrNight;
    // console.log("HI") 
},1000)


