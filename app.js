var starbucks = {
    coffee: {
        espresso: "концентрированный кофе, 30-40мл",
        latte: "эспрессо со вспененным молоком, 240 мл ",
        frappe: "холодный кофе с пенкой, 300 мл",
        raf: "порция эспрессо со взбитыми паром сливками и сиропом, 350 мл",
        mocaccino: "горячий шоколад и взбитого молоко, 240 мл",
        irish: "эспрессо на основе ирландского виски c со взбитыми паром сливками, 240 мл ",
        macciato: ""
    },
    tea: {
        black: "индийский крупнолистовой чай, 250 мл",
        matcha: "японский зеленый чай, растертый в порошок, 250 мл",
        oolong: "китайский зеленый чай, 250 мл",
        herbal: "напиток из плодов, цветков, стеблей растений, не содержащих кофеина, 250 мл",
        puer: false
    }
}
console.log(starbucks)

var order = prompt("Введите название напитка")
if ((order in starbucks.coffee && starbucks.coffee[order]) || order in starbucks.tea && starbucks.tea[order]) {
   alert("Ваш заказ принят");
} else if (starbucks.coffee[order] === false || starbucks.tea[order] === false){
    alert(order + ' нет в налии!')
}
else {
    alert('Not found');
}
location.reload()