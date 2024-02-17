// getElementById ,getElementsByclassName, getElementByTagName, getElementByName

// innerHTML , innerText , textContent

document.getElementById("heading").innerHTML="<i>Welcome to the DOM JS</i>"

document.getElementById("coding").innerText="<h1>This is sample text</h1>"

let address=document.getElementById("address");

address.textContent="#8,eRODE";

address.style.color="red"
address.style.backgroundColor="wheat";

// querySelectors ,QuerySelectorAll

let para=document.querySelectorAll('p');

para[0].innerHTML="Welcomw to the MERN stack "
para[1].innerHTML="second para"

let idSelect=document.querySelector('#colorId');

idSelect.innerHTML="Follow <br /> Avoid traffic"

let classSelect=document.querySelector('.styleColor');

classSelect.innerText="<br/>class may be selected"


// onclick function

function myfun()
{
    console.log("HEllo");

    let btn=document.getElementById("click")

    btn.style.display="none"

}

function openWindow()
{
    let btn=document.getElementById("click")

    btn.style.display="inline"

}

function another()
{
    window.open("https://learn.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql?view=sql-server-ver16")
}

