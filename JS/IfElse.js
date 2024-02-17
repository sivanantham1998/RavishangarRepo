let a=10;

let b=-6;

// if(a<b)
// {
//     console.log("True statatement");
//     console.log(a+b);
// }
// else
// {
//     console.log('false statement');
//     console.log(b-a);
// }


if(a<b)
{
    if(b>=0)
    {
        console.log('true Nestingif statement');
    }
    else
    {
        console.log('false nesting');
    }
}
else
{
    console.log("parent false statemnt");
}


let name='ravi';
let name1='shankar';

if(name==name1)
{
    console.log("it is true");
}
else if(name1=='ravi')
{
    console.log('yes name is ravi');
}
else if(name!=name1){
    console.log('yes not equal');
}
else
{
    console.log('totally wrong');
}


// logical gate  AND , OR , NOT

// AND
if(name==name1 && name=='ravi')
{
    console.log('Logical AND true');
}
else
{
    console.log("Logical AND false");
}

// OR
if(name==name1 || name=='ravi')
{
    console.log('Logical OR true');
}
else
{
    console.log("Logical OR false");
}


// NOT

if(name!='ravi')
{
    console.log('logical not True');
}
else
{
    console.log('logical not false');
}

