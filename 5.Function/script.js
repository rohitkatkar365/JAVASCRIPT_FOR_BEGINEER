// Add two number
function sum(a,b){
    console.log(a+b);
}

sum(1,2);

// Function Expression
let res = function(a,b){
    console.log(a+b);
}

res(1,2);

// Arrow Function
let res1 = (a,b)=>{
    console.log(a+b);
};

res1(1,2);

// Anonyms function
(function(a,b){
    console.log(a+b);
})(1,2);

// Higher Order Function
function higherorder(greet)
{
    const message = "I am higher order";
    greet(message);
}

function display(msg)
{
    console.log(msg);
}

higherorder(display);


// Closure function
function outerfunction()
{
    let outer = "I am outer";

    function innerfunction()
    {
        console.log(outer);
    }
    return innerfunction;
}

const res2 = outerfunction();
res2();