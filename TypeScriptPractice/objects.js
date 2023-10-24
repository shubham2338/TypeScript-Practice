//IN this example, the person object only accepts an object that has two
//properties: name with the string type and age with number type.
/*
let person:{
    name: string;
    age: number
};

person = {
    name: 'shubham',
    age: 25
};

//function arguments and return types.

let greeting :(name: string)=> string;

//In this example, you can assign any function that accepts a string and return a string to the greeting variable.

greeting = function(name: string){
    return `Hi ${name}`;
};
let ans: string = greeting('shubham');
console.log(ans);
*/
/*
let arr: (number | string)[] = [1,2,3,4,'hi'];
console.log(arr);
console.log(arr[arr.length-1]);

*/
//Contextual typing
/*
document.addEventListener('click',function(event){
    console.log(event.button);

});

document.addEventListener('scroll',function(event){
    console.log(event.button);
});
*/
var price;
var price = 9.9;
console.log(price);
