const currentNum = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

function updateNumberColor() {
    const num = parseInt(currentNum.textContent, );
    if (num > 0) {
        currentNum.style.color = 'green';
    } else if (num < 0) {
        currentNum.style.color = 'red';
    } else {
        currentNum.style.color = '#fff'; 
    }
}
increaseBtn.addEventListener('click', function () {
    let newNum = parseInt(currentNum.textContent,) + 1;
    currentNum.textContent = newNum;
    updateNumberColor();
});

resetBtn.addEventListener('click', function () {
    currentNum.textContent = '0';
    updateNumberColor();
});

decreaseBtn.addEventListener('click', function () {
    let newNum = parseInt(currentNum.textContent,) - 1;
    currentNum.textContent = newNum;
    updateNumberColor();
});
