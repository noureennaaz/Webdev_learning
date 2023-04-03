let promise1=new Promise((resolve, reject) => {
    
    setTimeout(function()
    {
        console.log('Inside promise 1 timeout');
    },2000);
    resolve(true);
})

let output=promise1.then(()=>{
    let promise2=new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Inside promise 2 timeout');
        },5000);

        resolve("promise 2 resolved");
    })
    return promise2;
})

output.then((value)=>{ console.log(value)})


