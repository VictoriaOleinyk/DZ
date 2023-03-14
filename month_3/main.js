
const innInput = document.querySelector('#innInput'),
      innCheck = document.querySelector('#innCheck'),
      innResult = document.querySelector('.innResult')

const regExp = /^201\d{11}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'NOT OK'
        innResult.style.color = 'red'
    }

}



let position = 0

function recursionBox () {
    position ++;
    if (position > 450) return;
    document.querySelector('.box').style.left = position + 'px';
    animation();

}

function animation() {
    setTimeout(recursionBox, 20);
}

animation();