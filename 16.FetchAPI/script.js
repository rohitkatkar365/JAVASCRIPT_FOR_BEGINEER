let url = "https://cataas.com/cat";

let p = async ()=>{
    let ftech = await fetch(url);
    console.log(ftech.url);
}

p();