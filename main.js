const btn = document.querySelector('.btn')
const wrapper = document.querySelector('.wrapper')
wrapper.innerHTML = ""
btn.addEventListener('click', () => {
    if (  wrapper.innerHTML == "") {
        const request = new XMLHttpRequest()
        request.open("GET", "peoples.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.addEventListener('load', () => {
            const peoples = JSON.parse(request.response)
            peoples.forEach((people) => {
                const div = document.createElement('div')
                div.setAttribute('class', 'user')
                div.innerHTML = `
    <img src="${people.url}" alt="picture">
    <h2>Name: ${people.name}</h2>
    <span>Age: ${people.age} </span>
    `
                wrapper.append(div)
            })
        })
    } else {
        wrapper.innerHTML = ""
    }


} )



