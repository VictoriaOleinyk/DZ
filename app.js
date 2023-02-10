// var starbucks = {
//     coffee: {
//         espresso: "концентрированный кофе, 30-40мл",
//         latte: "эспрессо со вспененным молоком, 240 мл ",
//         frappe: "холодный кофе с пенкой, 300 мл",
//         raf: "порция эспрессо со взбитыми паром сливками и сиропом, 350 мл",
//         mocaccino: "горячий шоколад и взбитого молоко, 240 мл",
//         irish: "эспрессо на основе ирландского виски c со взбитыми паром сливками, 240 мл ",
//         macciato: ""
//     },
//     tea: {
//         black: "индийский крупнолистовой чай, 250 мл",
//         matcha: "японский зеленый чай, растертый в порошок, 250 мл",
//         oolong: "китайский зеленый чай, 250 мл",
//         herbal: "напиток из плодов, цветков, стеблей растений, не содержащих кофеина, 250 мл",
//         puer: false
//     }
// }
// console.log(starbucks)
//
// var order = prompt("Введите название напитка")
// if ((order in starbucks.coffee && starbucks.coffee[order]) || order in starbucks.tea && starbucks.tea[order]) {
//    alert("Ваш заказ принят");
// } else if (starbucks.coffee[order] === false || starbucks.tea[order] === false){
//     alert(order + ' нет в наличии!')
// }
// else {
//     alert('Not found');
// }
// location.reload()
//
// var playerColor = false
// if (playerColor){
//     console.log("you start")
// }else {
//     console.log("wait your enemy")
// }
//
// console.log(playerColor ? "you start": "wait your enemy")
//
// var isReady = 1
// console.log(isReady ? "True": "False")
//
// var ageUser = +prompt("enter your age")
// console.log(ageUser >= 18 ? "Enter":"Go away")

// var numbers = [4, 5, 6, 7, 8, 9, 0]
// console.log(numbers.sort())
//
// var others = [
//     true,
//      false,
//        {
//            name: "Victoria"
//     },
//     null, undefined, "qwerty", 45, 56n
// ]
//
// console.log(others[3][3])
// console.log(others.length -1)

// var fruits = ["banana", "orange", "apple"];
// fruits.push("cherry")
// console.log(fruits)
//
// fruits.unshift("strawberry")
// console.log(fruits)
//
// fruits.splice(2,0 'drum')
// console.log(fruits)
//
// var lastFruit= fruits.pop()
// console.log
//
// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(matrix [2][0])
//
// var fruits2 = ["banana", "orange", "apple"];
// var fruit = "orange"
// var i = 0
// while (i<4){
//     if (fruits2[i] === fruit) console.log("fruit found on index", i)
//     i++
// }
//
// var names = ['aidar', 'anna', 'john', 'jack', 'olivia', 'ilya'];
// var blackList = ['ilya', 'anna'];
// for (var i = 0; i < names.length; i++){
//     if (blackList.includes(names[i].toLocaleLowerCase())){
//         console.warn(`${names[i]} in blacklist`)
//         continue;
//     }
//     console.log(`welcom, dear guest ${names[i]}`)
// }

var arr = [
    1,
    2,
    'Juli',
    "",
    null,
    true,
    false,
    NaN
];

var arrerr = arr.map(sweetItem => {
    return sweetItem
});
// var new_array = arr.map(function callback([arr]);
// var n = {
//     number: [],
//     string: [],
//     undef: [],
//     bool: [],
//     nan: [],
// };
// for (var i = 0; i < arr.length; i++){
//     if(typeof arr[i] == 'number' && !isNaN(arr[i])) {
//         n.number.push(arr[i]);
//     }else if(typeof arr[i] == 'string'){
//         n.string.push(arr[i]);
//     } else if(typeof arr[i] == 'boolean'){
//         n.bool.push(arr[i]);
//     }else if(typeof arr[i] == 'undefined'){
//         n.undef.push(arr[i]);
//     }else if(isNaN(arr[i]) === true){
//         n.nan.push(arr[i]);
//     }
// }
//
// // for (var i in n; i++){
// //     if(i > i[+1]);
//
// }
console.log(arrerr)
//
// for (var i = 0; i < arr.length; i++){
    // if (arr.includes(typeof "number")){
    //  arr.map}
