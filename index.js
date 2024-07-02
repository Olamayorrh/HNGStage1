
const dateNow = document.querySelector(".dateToday");
const timeNow = document.querySelector(".time");

console.log(dateNow);

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ];
const monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]



const showDate = ()=>{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let toDay = date.getDay();

    dateNow.innerHTML = `${dayOfWeek[toDay]}`
};

showDate();



const showTime = ()=>{
    let date = new Date();
    let hour = date.getHours() - 1;
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let period = "AM";

    if(hour == 0){
        hour = 12;
    }

    if( hour > 12){
        hour = hour - 12;
        period = "PM"
    }

    if(hour < 10){
        hour = `0${hour}`
    }

    if(min < 10){
        min = `0${min}`
    }

    if(sec < 10){
        sec = `0${sec}`;
    }

    let time = `${hour}:${min}:${sec} ${period}`

    timeNow.innerHTML = time;

   
    
}
setInterval(showTime,1000);


