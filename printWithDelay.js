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