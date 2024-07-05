let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("--------------------------------");

const item = {
    name: "Rohit",
    class: 12,
    age: 22
};

for (let i in item) {
    console.log(i);
}
console.log("--------------------------------");

for (let i of arr) {
    console.log(i);
}
console.log("--------------------------------");

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log("--------------------------------");

let j = 0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);