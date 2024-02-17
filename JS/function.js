function na()
{
    console.log("Function Working")
    let a='siva';
    if((a=="sivanantham")|| (a=='siva'))
    {
        console.log(a);
    }
    else
    {
        console.log("Total wrong");
    }
}
na()

function sum(a,b)
{
    return a+b
}
console.log(sum(1,1));
console.log(sum(100,-67890));
// arrow function
let minus= (a,b)=>
{
    return a-b
}

console.log(minus(1,-1))

// setTimeout,setInterval,clearTimeout,clearInterval

let out=setTimeout(() => {
    let y=confirm('Do u need Install some package')

    if(y)
    {
        console.log("yes");
    }
    else{
        console.log('you cliked No button');
    }
}, 5000);

let time=setInterval(() => {
    console.log("Hello interval state");
}, 10000);

if(1==="1")
{
    let b=clearInterval(time)
    console.log("ok");
}
else
{

    console.log(time);
}