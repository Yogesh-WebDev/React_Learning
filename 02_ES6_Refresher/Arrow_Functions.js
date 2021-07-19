// const square=function (number) {
//     return number*number;
// }
// const square= (number)=> {
//     return number*number;
// }
const square= number =>     number*number;
//all square method above this line are same
console.log(sqaure(5));

//use of arrow function
const jobs=[
    { id:1, isActive:true},
    { id:2, isActive:true},
    { id:3, isActive:false},
]
//without arr function
const activeJobs=jobs.filter(function (job) {
    return job.isActive;
})
//with arrow function
const activeJobs=jobs.filter(job=> job.isActive)