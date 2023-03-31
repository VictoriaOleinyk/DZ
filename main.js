
const block = document.querySelector('.block')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

let count = 1

function disableButtons (){
    btnPrev.disabled = count <= 1
    btnNext.disabled = count >= 200
}

const cardText = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then (data => {
            block.innerHTML = `
            <h2>${data.title}/</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
            `
})
}

function cardChange () {
    const div = document.querySelector('div');
    div.addEventListener('click', (event) => {
    if (event.target.classList.contains('next')){
        count++;
        disableButtons()
        cardText();
    } else {
        count--;
        disableButtons()
        cardText()
    }
    })
}

cardChange()

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })






