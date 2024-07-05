var a = 2;
console.log("Global Values Of A Is : ", a);

// Forgot about this code
function print() {
    // Scope of a is global
    console.log(a);
}

function print1() {
    let b = 5;
    console.log("Value Of B Is : ", b);
}

// console.log(b); This Code Give Error Because Of Scope of b variable is local/block

var c;
console.log(c);

let d;
console.log(d);

// print()
// print1()

