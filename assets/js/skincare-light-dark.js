const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
let skincareDay = document.getElementById('skincare-day');

try {
toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')) {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-day.jpg';
  }else {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-night.jpg';
  }
  console.log(document.getElementById('day-routine').innerHTML)
  change_text(document.getElementById('day-routine').innerHTML);
  saveData();

  //change_text('Day Routine');
})
} catch(exceptions) {
  console.log(exceptions)
}

function change_text(dayNight) {
  //var dayNight = document.getElementById('day-routine').innerHTML;
  console.log(dayNight)
  // if day routine says specific text, change to other routine
  if(dayNight == "Day Routine") { 
    document.getElementById('day-routine').innerHTML = "Night Routine";
  } else {
    document.getElementById('day-routine').innerHTML = "Day Routine";
  }
} 

// function to save data for color 
function saveData() {
  localStorage.setItem("routine-text", document.getElementById('day-routine').innerHTML);
}

// get list data from HTML
function showMode() {
  let dayNight = (localStorage.getItem("routine-text"));
  console.log(dayNight)
    // if day routine says specific text, change to other routine
    document.getElementById('day-routine').innerHTML = dayNight;
   if(dayNight == "Day Routine") {
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-day.jpg';
  } else {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '1s';
    skincareDay.src= '/student/images/skincare-night.jpg';
  }
}

window.setTimeout(
  showMode
  , 100);

