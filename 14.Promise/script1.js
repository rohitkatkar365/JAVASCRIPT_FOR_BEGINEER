console.log("Hello")
// let p = new promise(resolve,reject){
//     resolve(true);
//     setTimeout(function(){
//         console.log("I am settimeout");
//     },3000);
    
// };

// p.catch((error)=>{
//     console.log("Something wrong")
// })

// console.log("Bye");
let p = new Promise(function(resolve,reject){
    resolve(295);
    setTimeout(() => {
        console.log("Settimeout function called")
    }, 5000);
});

// p.catch((error)=>{
//     print("Something Wrong")
// });
function sum(a,b){
    console.log(a+b);
}
let q = p.then(sum(1,2)).catch((error)=>{
    console.log("Some Wrong Action Occur");
})

console.log("Bye")