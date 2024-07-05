let obj = {
    name : "Rohit",
    ram:()=>{
        console.log("ram");
    }
}

let p = {
    run:()=>{
        console.log("Run");
    }
}

obj.__proto__ = p;
// console.log(obj);
// console.log(p)
console.log(obj.name)
console.log(obj.run)