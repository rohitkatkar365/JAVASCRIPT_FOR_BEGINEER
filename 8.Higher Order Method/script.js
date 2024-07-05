let arr = [ 5, -2, 23, 7, 87, -42, 509];

// Map Function
let ans = arr.map((el)=>{
    return el * 2;
});

console.log(ans);

let ans1 = arr.filter((ele)=>{
    return ele % 2==0;
});

console.log(ans1);

let ans2 = arr.reduce((e1,e2)=>{
    return e2 + e1;
});

console.log(ans2);


// Factorial
let fact = reduce()