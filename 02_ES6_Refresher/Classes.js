const person={
    name:'Yogesh',
    walk () { 
        console.log("walk");
    },
    
}
// const person2={
//     name:'Yogesh',
//     walk () { 
//         console.log("walk");
//     },
    
// }

class Person{
    constructor(name) {
        this.name=name;
    }
    walk(){
        console.log("walk");
    }
}
const p1=new Person('yogesh');
p1.walk();