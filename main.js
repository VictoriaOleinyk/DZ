const cards = document.querySelector('.cards')
const urlImg = 'https://robb.report/upload/img_cache/4a0/4a0f20ad62a962c3214cd9e267365d20_ce_268x197x0x0_cropped_800x427.jpg'
const url = 'https://jsonplaceholder.typicode.com/posts?userId=1&&userId=2'

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const fetchData = async () => {
    try {
        await delay(1000)
        const resp = await fetch(url)
        const data = await resp.json()
        data.forEach((object) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'text')
            div.innerHTML = `
                <img src="${urlImg}" alt="picture">
                <h3>${object.title}</h3>
                <p>${object.body} </p>
    `
                cards.append(div)

        })
    } catch {
        console.error('ERROR')
    }
    finally {
        console.warn('DONE')
    }
}
fetchData()




