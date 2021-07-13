const first=[1,2,3,4];
const second=[5,6,7,8];
//old way
const combined=first.concat(second);
//new way
const combined=[...first,...second];

//create copy
const clone=[...first];


const first={ name:"yogesh"};
const second={ job:"Instructor"};

//way
const combined={...first,...second};

//create copy
const clone={...first};