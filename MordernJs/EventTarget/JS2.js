//Creating div and multiple paragraphs owning listeners
//Avoid too many addEventListener


let newDiv= document.createElement('div');

function print()
{
    console.log('clicked on a para' );
}



for(let i=1 ; i<=30 ;i++)
{
    let Div_i=document.createElement('p');
    Div_i.textContent="para "+ i +" added";
    newDiv.append(Div_i);


    /*Method1*/
    // Div_i.addEventListener('click', print)
     

    /*This can be made better by Adding Listener to the created div directly but it will cause not only paragraph but extra space to trigger event listener*/
     
    

    //This problem can be prevented by event target method
    
}
document.body.append(newDiv);


/*Method2*/
// newDiv.addEventListener('click',print);

/*Method3*/
newDiv.addEventListener('click',byeventTarget);


function byeventTarget(event)
{
    console.log(event.target.textContent);
}




//flitering specific tags 
let block=document.querySelector('#container');

block.addEventListener('click',function(inv){
    if(inv.target.nodeName=='SPAN')
    {
        console.log('span Clicked'+ inv.target.textContent);
    }
})


