function set(src,sum){
    let srcipt = document.createElement("script");
    document.head.appendChild = srcipt;
    srcipt.src = src;
    alert(src);
    sum();
}

function sum(a,b){
    document.write(a+b);
}

set("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js",sum(1,2));