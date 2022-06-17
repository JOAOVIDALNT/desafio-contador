let currentNumberWrapper = document.querySelector('#currentNumber')
let currentNumber = 0;

document.addEventListener('keypress', function (e) {
    if (e.key === '+') {
        const btnplus = document.querySelector('#plusButton')

        btnplus.click();
    } 
    else if (e.key === '-') {
        const btnminus =  document.querySelector('#minusButton')

        btnminus.click();
    }
    
})

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    } else {
        currentNumberWrapper.style.color = 'black'
    }
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    } else {
        currentNumberWrapper.style.color = 'black'
    }
}