const slackName = document.querySelector(".slack_name");
const imageEl = document.querySelector(".image");
const currentDay = document.querySelector(".current_day");
const currentTime = document.querySelector(".time");
const trackEl = document.querySelector(".track");

const profile = {
    name: "Adebayorajide",
    img: "https://ca.slack-edge.com/T05FFAA91JP-U05S0AU36L8-b655037ef848-512",
    track: "Frontend Development",
};

   slackName.innerHTML = profile.name;
    imageEl.src = profile.img;
    imageEl.alt = profile.name;
    trackEl.innerHTML = profile.track;

function updateTime(){
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
let day = weekday[currentDate.getDay()];
 currentDay.innerHTML = day;
 currentTime.innerHTML =  currentDate.getTime();  
}

updateTime();
setInterval(updateTime, 100);
