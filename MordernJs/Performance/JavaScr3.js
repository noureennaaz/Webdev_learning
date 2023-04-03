let head1=document.createElement('h2');
head1.textContent="Mulltiple Repaint and Reflow"
document.body.appendChild(head1);

for(let i=0 ; i<15 ; i++)
{
    let newElem= document.createElement('p');
    newElem.textContent='para '+ i;

    document.body.append(newElem);
}
//Current 
const t1=performance.now();


//comparatively optimal way
let content=document.createElement('div');
let head2=document.createElement('h2');
head2.textContent="Div Created";
content.appendChild(head2);
for(let i=0 ; i<15 ; i++)
{
    let para=document.createElement('p');
    para.textContent= 'paragraph-' + i;


    content.appendChild(para);
}
document.body.appendChild(content);


const t2=performance.now();


console.log("time difference is :"+ (t2-t1));


//optimal way to perform the previous stuff

let frag= document.createDocumentFragment('fieldset');
let head3=document.createElement('h2');
head3.textContent="Creating Document Fragment";
frag.appendChild(head3);
for(let i=0 ;i<20 ; i++)
{
    let paraContent=document.createElement('p');
    paraContent.textContent="fragment text "+ i;
    frag.append(paraContent);
}
document.body.appendChild(frag);

// const x=5;
// const y=6;
// console.log(`The sum of xand{y} is ${x+y}.`);