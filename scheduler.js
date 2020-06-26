$(document).ready(function () {
    console.log("ready");
});

// set hours of day planner
var businessHrs = {
    "8AM": "",
    "9AM": "",
    "10AM": "",
    "11AM": "",
    "12PM": "",
    "1PM": "",
    "2PM": "",
    "3PM": "",
    "4PM": "",
    "5PM": "",
};


// set date at the top
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// to change colors of row depending on current time
var rows = $(".row");
var currentTime = parseInt(moment().format('H'));
var pastTime = pastTime < currentTime;
var nowTime = currentTime;
var rowTime = $(".row")

function backgroundColor() {
    if (nowTime == currentTime) {
        setColor(row = yellow);
    } else if (currentTime < rowTime) {
        setColor(row, "gray");
    } else {
        setColor(row, "white");
    }
    backgroundColor();

    // after enter tasks, vallidate fields & click save button
    var myNotes = $("#inputText");
    var toDos = myNotes.value.trim();

    $("#saveButton").on("click", function () {
        console.log(saveButton);
    });

    if (myNotes === "") {
        displayMessage("saved!");        
    }

    // set notes and save to local storage
    localStorage.setItem("myNotes", JSON.stringify(myNotes));

    // get recent notes
    var savedData = JSON.parse(localStorage.getItem("myNotes"));
    console.log(myNotes);
}

