const value=document.querySelector('#count');
// // value=parseInt

// const increment=
// ()=>{
//     let count=parseInt(value.innerText);
//     count++;
//     value.innerText=count;


// };

// const decrement=
// (  )=>{
//     let count=parseInt(value.innerText);
//     count--;
//     value.innerText=count;

// };



//SAME THING USING EVENT LISTENER
const inc=document.querySelector('.increment');
inc.addEventListener('click', ()=>{
    let count=parseInt(value.innerText);
     count++;
     value.innerText=count;
});

const dec=document.querySelector('.decrement');
dec.addEventListener('click', ()=>{
    let count=parseInt(value.innerText);
     count--;
     value.innerText=count;
});


