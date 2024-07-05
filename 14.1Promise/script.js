let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(18);
        console.log("P1");
    },2000);
});

let p2 = new Promise((resolve,response)=>{
    setTimeout(()=>{
        reject(45);
        console.log("p2");
    },4000)
}).catch((error)=>{
    console.log("Wrong");
})

// let pa = Promise.all([p2,p1]);
// let pa = Promise.allSettled([p1,p2]);
// let pa = Promise.race([p1,p2]);
// let pa = Promise.any([p1,p2]);
// let pa = Promise.resolve([p1,p2]);
let pa = Promise.reject([p1,p2]);