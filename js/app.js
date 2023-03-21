const tabs = document.querySelectorAll('.tabheader__item')
      tabsParent = document.querySelector('.tabheader__items')
      tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => item.style.display = 'none')
    tabs.forEach(item => {item.classList.remove('tabheader__item_active')})
}

const showTabContent = (item = 0) => {
    tabContent[item].style.display = 'block'
    tabs[item].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()


let i = 0

function nextSlide (){
    i++
    if(i <= 3) {
        hideTabContent()
        showTabContent(i)
    } else {
        i = 0
        hideTabContent()
        showTabContent(i)
    }
}

    setInterval(nextSlide, 2000)


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)

            }
        })
    }
}


const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click',openModal)
closeModalBtn.addEventListener('click',closeModal)

modal.addEventListener('click', event => event.target === modal ? closeModal() : false)
window.addEventListener('keydown', event => event.code === 'Escape' ? closeModal() : false )


function openModalScroll () {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', openModalScroll)
    }
}

window.addEventListener('scroll', openModalScroll)

setTimeout(openModal, 10000)



const deadline = '2023-03-22'


function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.seconds)
    }

}

setClock('.timer', deadline)

