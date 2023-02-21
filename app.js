const nums =  document.getElementById("counter_value");
const buttonInc = document.getElementById("button_inc")
const buttonDec = document.getElementById("button_dec")
let counterValue = 0

function disableButtons (){
    buttonInc.disabled = counterValue >= 10
    buttonDec.disabled = counterValue <= -10
}


function  counterIncrement () {
    nums.value = ++counterValue
    disableButtons()
}

function  counterDecrement () {
    nums.value = --counterValue
    disableButtons()
}

buttonInc.onclick = counterIncrement
buttonDec.onclick = counterDecrement


