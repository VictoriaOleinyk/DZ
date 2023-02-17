
function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverseString('hello'));

let bookList = function (book_names){
    let newBookList = []
    let newBookList2 = []
    for (const name of book_names) {
        if (name.includes('u'))
            newBookList.push(name)
        else
            newBookList2.push(name)
    }
    return [newBookList, newBookList2]
}

let splitted =  bookList(['Ann', 'Jain Air', 'Pride and Prejudice'])
for (const splittedElement of splitted) {
    console.log(splittedElement)
}

