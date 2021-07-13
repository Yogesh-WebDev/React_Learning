//var--->function scope
//let--->block scope
//const--->block scope and not allowed to reassign

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i); 
    }
   // console.log(i);//accessible outside of block scope for var
}
sayHello()