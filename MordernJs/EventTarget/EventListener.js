//addEventListener

let heading=document.querySelector('h1');
heading.addEventListener('click', function()
{
    heading.style.background='black';
    heading.style.color='blanchedalmond';
    alert('Clicked h1 once');

});




//removeEventListener

let head2=document.querySelector('h2');

head2.addEventListener('click', change);

head2.removeEventListener('click', change);
function change()
{
    alert('Clicked h2 once');
}

//EventListener in Capture phase
//By default its in Bubbling phase 
//'true' paramerter is added to make it occur during Capturing Phase

const paragraph1= document.querySelector('#para1');
paragraph1.addEventListener('click',function(){
    alert('capturing phase trigger');
    paragraph1.style.background='black';
    paragraph1.style.color='blanchedalmond';

})


//Event Object

let head=document.querySelector('#h22');
head.addEventListener("dblclick", function(event1)
{
    head.style.background='black';
    head.style.color='blanchedalmond';
    alert('Check console to see event');
    console.log(event1);
})


//Preventing Default Action
let links=document.querySelectorAll('a');

let link3 =links[2];

link3.addEventListener('click',function(event)
{
    event.preventDefault();
    alert("Link made un-clickable by js :)");

});










