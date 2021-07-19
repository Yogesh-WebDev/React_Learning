const address={
    street:'',
    city:'',
    country:''
};

//old method to access property
const street=address.street;
const city=address.city;
const country=address.country;

//new method4
const {street ,city,country}=address;

//using alias for property
const {street: st}=address;