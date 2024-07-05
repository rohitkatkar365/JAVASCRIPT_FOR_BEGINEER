let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}
// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//   Problem 2
for (let i in marks) {
    console.log(marks[i]);
}
