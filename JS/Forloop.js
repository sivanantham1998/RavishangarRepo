let a=5;


for(let i=0;i<=a;i++)
{
    console.log("For worked :" +i)
}

let name='javascript'

for(let b=0;b<=name.length;b++)
{
    console.log(name.slice(0,b))
}

// for of ,forEach 

let ar=["one","two","three",4,0,]

for(let i=0;i<=ar.length;i++)
{
    console.log(ar[i])
}


// for Of

for (const a of ar) {
    console.log(a);
}

ar.forEach(function(w,index)
{
    console.log(index,w);
})

// map

let person=[
    {name:"siva",age:26},
    {name:'Ravi',age:24},
    {name:'sathish',age:35}
]

person.map(function(man)
{
    console.log(man.name,man.age);
})

let val=[
    {name:'siva',mark:45},
    {name:'ravi',mark:65},
    {name:'satjhish',mark:89}
]

let total=val.reduce(
    (a,b)=> a+parseInt(b.mark),0

    )

    console.log(total)