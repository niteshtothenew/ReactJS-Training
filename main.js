function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').innerHTML = timeString;

    var dateString = now.toDateString();
    document.getElementById('date').innerHTML = dateString;

    var message = "";
    if (hours >= 5 && hours < 12) {
        message = "Good Morning!";
    } else if (hours >= 12 && hours < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }
    document.getElementById('message').innerHTML = message;
}

setInterval(updateClock, 1000);

updateClock();