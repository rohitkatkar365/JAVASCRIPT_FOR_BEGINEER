let a = "I am Rohit";

console.log(a[0]);
// console.log(a[-5]) undefined
console.log(a.charAt(2));
console.log(a.slice(0,3));
console.log(a.length);
console.log(a.split(" ",a.length));
console.log(a.replace("I am","I'm"));
console.log(a.substring(2,6));
console.log(a.endsWith("a"));
console.log(a.includes("am"));
console.log(a.indexOf("Rohit"));
console.log(a.search("not"));
console.log("Hello ".repeat(3)); // Repeats the string "Hello " three times

let b = "         Rockey           ";
console.log(b.trimEnd());
console.log(a+b);
console.log(a.concat(b));
console.log(a.valueOf());
