// const person={
//     talk(){
//         setTimeout(function () {
//              console.log("this",this);
//         },1000)
       
//     }
// }
// person.talk();//--->referance to person object before timeOut function now it returns window object
const person={
    talk(){
        setTimeout( ()=> {
             console.log("this",this);
        },1000)
       
    }
}
person.talk();//--->referance to person object 