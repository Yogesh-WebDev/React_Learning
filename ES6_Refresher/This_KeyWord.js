const person={
    name:'Yogesh',
    walk () { 
        console.log(this);
    },
    
}
//person.walk()--->returns person object
const walk=person.walk;
//console.log(walk);-->returns function
//walk();--->undefined
