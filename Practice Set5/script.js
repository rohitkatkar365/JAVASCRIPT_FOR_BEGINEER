

const setjs = async (src)=>{
    return new Promise((resolve,reject)=>{
            let script = document.createElement("script");
            script.src = src;
            script.onload= ()=>{
                resolve(src);
            }
            document.body.append(script);
            // console.log("Set Script");
    })
}

const main1 = async ()=>{
    let a = await setjs("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
    console.log(a);
}


main1()