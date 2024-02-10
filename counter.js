function createCounter() {
    let count = 0; 

    function increment() {
        count++;
        console.log('Count:', count);
    }

    function decrement() {
        count--;
        console.log('Count:', count);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement();
console.log('Current count:', counter.getCount()); 