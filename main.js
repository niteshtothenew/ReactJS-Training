function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
    document.getElementById('clock').innerText = time;

    var message = "";
    if (hours >= 5 && hours < 12) {
        message = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }
    document.getElementById('message').innerText = message;
}

updateClock(); // initial call
setInterval(updateClock, 1000); // update every second

const array = [1, 2, 3, 4, 5];

function printWithDelay(array, index) {
    setTimeout(() => {
        console.log(array[index]);
        if (index < array.length - 1) {
            printWithDelay(array, index + 1);
        }
    }, 3000);
}

printWithDelay(array, 0);