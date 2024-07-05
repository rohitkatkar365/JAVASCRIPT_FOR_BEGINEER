function sum(a, b) {
    document.write(a + b);
}
// setTimeout(sum,3000,1,2);
// another way
// let a = setTimeout(()=>{
//     document.write(1+2);
// },5000);

let a = setInterval(function () {
    alert = prompt()
    if (alert == 'y') {
        alert("Hi");
    }
    else {
        clearInterval(a);
    }
}, 3000);

