// creates variables for input box and lists 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adds functionality to input box 
function addTask() {
    if(inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// if click on a list element, check the checkbox. if click on the span element remove the list element.
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// store any HTML data that the user saves. this means the user can click off the browser or page and their to do list will be saved.
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// get list data from HTML
function showTask() {
    //listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

