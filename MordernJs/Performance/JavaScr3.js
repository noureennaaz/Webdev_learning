let content=document.createElement('div');
for(let i=0 ; i<10 ; i++)
{
    let para=document.createElement('p');
    para.textContent= 'paragraph-' + i;


    document.appendChild(para);
}