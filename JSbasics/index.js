// Making variables


// let a=12;
// console.log(a);


// a='new value';
// console.log(a);


//reference types 

// Arr=['1', 2 , 6 , 3.5];

// for(Element of Arr)
// {
//     console.log(Element);
// }

// console.log(Arr);



//Making functions

// function fun()
// {
//     console.log('Function called');
// }

// fun();




//Creating objects 


// let bag={
//     pencilBox: 1,
//     notebook:6,
//     printThings()
//     {
//         console.log('This is not empty');
        
//     }
// }


//Creating factory function 


// function createPlane(x , y)
// {
//     let plane=
//     {
//         x,
//         y,

//         printingfx: function() 
//         {
//              console.log(x);
//              console.log(y);
//         }
//     }
//     return plane;
// }

// let plane1=createPlane(2 , 3);
// plane1.printingfx();

// let plane2=createPlane(7 , 9);
// plane2.printingfx();



//CREATING CONSTRUCTOR FUNCTION

//there's use of this keyword and no need to return objects

// function createPlane(x ,y )
// {
//     x,
//     y,

//     this.printingfx=function() 
//         {
//              console.log(x);
//              console.log(y);
//         }

// }

// plane=new createPlane(2, 5);
// plane.printingfx();


//Calling  previous constructor

//This works in console 
// plane.constructor();


//Creating strings

// let priStr='String1';

//Object string 
//let objStr=String('String2');




//converting the primitive string to object string\

// let fName='myname'; 
// fName.length ;


// console.log(fName.includes('ynam'));

//Separating the words present in a sentence

// let str='this is a string';

// let words=str.split(' ');
// console.log(words);


//sorting an array custom function

let nums=[1 , 9 , 8  , 6, 5];

let sum=0;
for(values of nums)
    sum+=values;


console.log(sum);


