const person={
    name:'Yogesh',
    walk () { 
        console.log(this);
    },
    
}
person.walk()//--->returns person object
const walk=person.walk.bind(person);
console.log(walk);//-->returns function
walk()//;--->undefined in strict mode but now after bind it return person object
