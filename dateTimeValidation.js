// This JavaScript file will handle the input validation of the date and time
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();

if (hour < 10) {
    hour = "0" + hour;
}

if (minute < 10) {
    minute = "0" + minute;
}

var currentDate = date.toISOString().substring(0, 10);
document.getElementById("dateTime").value = currentDate;

var currentTime = hour + ":" + minute;
document.getElementById("dateTime").value = currentTime;

// The function that will be invoked when the date and time input field of the record html has been changed
function checkForValidDate() {
    var UserDate = document.getElementById("dateTime").value;
    var ToDate = new Date();

    // Checks if the date selected by the user is earlier than the actual date of the booking
    if (new Date(UserDate).getTime() >= ToDate.getTime()) {
        alert(
            "The Date and Time of the Near-miss Must Be Earlier Than or Equal to Today's Date and Time"
        );
        document.getElementById("dateTime").value = currentDate;
        return false;
    }
    return true;
}