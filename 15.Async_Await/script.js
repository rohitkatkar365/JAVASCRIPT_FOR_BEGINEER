function f1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("F1");
        resolve(18);
    },2000)
});
}

function f2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("F2");
        resolve(45);
        // reject(45)
    },2000)
});
}

function f3(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("F3");
        resolve(11);
    },2000)
});
}

async function operate(){
    try{
    await f1();
    await f2();
    await f3();}
    catch(error){
        console.log("Something Wrong");
    }
}

operate()