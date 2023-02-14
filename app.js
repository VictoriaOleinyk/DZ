var tag = [
    'li',
    'span',
    'h3',
    'a',
    'div',
    'span',
    'a',
    'li',
    'div',
    'div'
]

var res = {}

for (var i = 0; i < tag.length; i++) {

    if (tag[i] in res) {
        res[tag[i]]++
    } else {
        res[tag[i]] = 1
    }
}

console.log(res)
var sorted = Object.keys(res)
sorted.sort((a, b) => res[b] - res[a])
console.log(sorted)


var Jonh = [
    "name",
    "John",
    "lastname",
    "Black",
    "age",
    "23"
]

result = {}
for (var i = 0; i < Jonh.length; i++) {
    if (i % 2 === 0) {
        result[Jonh[i]] = Jonh[i + 1]
    }
}

console.log(result)


