let ravi= ["ravi","erode",345,true,false];

console.log(ravi);

let a=[4,5,6,'shankar']

let num=[1,2,3,4,5,6,7,8,9,10];

let total=num.reduce((a,b)=>a+parseFloat(b))
console.log('total value'+total);

console.log(num.slice(0,2));

// concat

console.log(ravi.concat(a));
console.log(ravi[1]);
console.log(ravi.length);

console.log(ravi.reverse());

// adding elements array

// 1.push 2.unshift ,3.splice

let end=prompt('Add element in end of array')

let b=a.push(end)

let start=prompt('Aedd element in the begin of array')

let c=a.unshift(start)

let middle=prompt('Add middle array')

let d=a.splice(1,0,middle)

console.log(a);

// delete

// pop,shift ,splice

let e=ravi.pop();

let f=ravi.shift();

let z=ravi.splice(1,2)

console.log(ravi);