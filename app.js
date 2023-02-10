var arr = [
  null,
  123,
  undefined,
  null,
  "qwerty",
  34,
  65,
  undefined,
  null,
  null,
  43,
  "aerg",
  999,
  true,
  "пкцйк",
];
var arrString = [];
var arrNumber = [];
var arrUnder = [];
var arrNull = [];
var arrBool = [];
var arrSim = [];
var rezalt = [];
for (var i of arr) {
  if (typeof i == "string") arrString.push(i);
  else if (typeof i == "number") arrNumber.push(i);
  else if (typeof i == "undefined") arrUnder.push(i);
  else if (typeof i == "boolean") arrBool.push(i);
  else if (typeof i == "simbol") arrSim.push(i);
  else if (i == null) arrNull.push(i);
}
console.log(rezalt);

if (arrBool.length > 0) rezalt.push(arrBool);
if (arrString.length > 0) rezalt.push(arrString);
if (arrNumber.length > 0) rezalt.push(arrNumber);
if (arrUnder.length > 0) rezalt.push(arrUnder);
if (arrNull.length > 0) rezalt.push(arrNull);
if (arrSim.length > 0) rezalt.push(arrSim);
rezalt.sort((a, b) => b.length - a.length);
console.log(rezalt);
