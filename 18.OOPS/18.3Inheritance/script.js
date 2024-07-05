class A{
    a = ()=>{
        console.log("run1");
    }
}
class B extends A{
    a = ()=>{
        console.log("run2");
    }
    b = ()=>{
        console.log("ru3");
    }
}

let obj = new B();
obj.a();
obj.b();
