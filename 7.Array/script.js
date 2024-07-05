let arr = [1,2,3,4,5,5,6,7,8,9];

console.log(arr);
console.log(arr.length);
// arr[13] = "Ram";
// console.log(arr);
arr.pop();
arr.push(10)
console.log(arr.join("_"));
console.log(arr.toString());
console.log(arr.concat([100,200,300]));
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Find the first number greater than 4
let found = numbers.find(element => element > 8);
console.log(found); // Output: 9

arr.reverse();
console.log(arr);

let compare = (a,b)=>{
    return a - b;
}

arr.sort(compare);
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

console.log(arr.slice(2,4));

arr.splice(1,0,100,200,300);
console.log(arr);

