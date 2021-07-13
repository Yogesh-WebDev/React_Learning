const person={
    name:'Yogesh',
    walk () { },
    talk () { }
}

person.talk();

//if u know property name use this
person.name='';

//if we dont konw property name then use this
let targateName='name';
person[targateName]='Raut';

