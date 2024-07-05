function validate(age){
    if (age >= 18) {
        alert("You Can Drive");
    }
    else{
        alert("You Can't Drive");
    }
}

// let age = prompt("Enter Age : ");
// validate(age);

function validate1(num){
    if(num > 4){
        location.href = "https://google.com";
    }
    else{
        document.body.style.backgroundColor = "orange";
    }
}

let num = prompt("Enter Number : ");
validate1(num);

