let example={
    name:'Ravi',
    address:'Erode',
    age:23,
    state:'tn',
    // nesting objects
    family:{
        father:true,
        mother:true,
        eldersis:false,
    }
}

console.log(example)
console.log(example.name,example.address);
console.log(example.family.father);

// array of object

let a=[
    {name:'siva',age:25},
    {name:'/arun',age:21}
]

console.log(a);

console.log(a[1].age);