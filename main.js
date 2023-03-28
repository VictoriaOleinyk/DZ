const kgs = document.querySelector('#kgs')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

let response = null
const loadCurrenses =  () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        response = JSON.parse(request.response)
    }
}
loadCurrenses()



const currencyConverter = (value, from, to) => {

        if (from === "kgs") {
            if (to === "usd") {
                return value / response.usd
            }
            if (to === "euro") {
                return value / response.euro
            }
            return value
        }
        if (from === "usd") {
            if (to === "kgs") {
                return value * response.usd
            }
            if (to === "euro") {
                return value * response.usd / response.euro
            }
            return value
        }
        if (from === "euro") {
            if (to === "kgs") {
                return value * response.euro
            }
            if (to === "usd") {
                return value * response.euro / response.usd
            }
            return value
        }

}


const convert = (event) => {
    let element = event.target
    let value = parseInt(element.value)
    let from = element.id
    if (from != "kgs")
        kgs.value = currencyConverter(value, from, "kgs").toFixed(2)
    if (from != "usd")
        usd.value = currencyConverter(value, from, "usd").toFixed(2)
    if (from != "euro")
        euro.value = currencyConverter(value, from, "euro").toFixed(2)
}

for ( const input of document.querySelectorAll("input")) {
    input.oninput = convert
}

// const convert = (elem, target, target2, isTrue) => {
//     elem.oninput = () => {
//         const request = new XMLHttpRequest()
//         request.open("GET", "data.json")
//         request.setRequestHeader("Content-type", "application/json")
//         request.send()
//         request.onload = () => {
//             const response = JSON.parse(request.response)
//             if (isTrue) {
//                 target.value = ( elem.value / response.usd).toFixed(2)
//                 target2.value = ( elem.value / response.euro).toFixed(2)
//             } else {
//                 target.value = ( elem.value * response.usd).toFixed(2)
//                 target2.value = ( elem.value * response.usd_euro).toFixed(2)
//             }
//             elem.value === '' && (target.value = '')
//             // elem.value === '' && (target2.value = '')
//         }
//     }
// }
//
// convert(som, usd, euro, true)
// convert( usd, som, euro,false)


