let operation;

function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}




const btn = document.querySelectorAll('.btn > span');
for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function() {
        this.innerHTML =
            (this.innerHTML === 'Показать ответ') ? this.innerHTML = 'Скрыть ответ' : this.innerHTML = 'Показать ответ';
    })

}


let successButtons = document.querySelectorAll('.btn-outline-success')
for (let button of successButtons){
    button.onclick = function() {
        this.parentNode.classList.toggle('hidden')
        }
}

