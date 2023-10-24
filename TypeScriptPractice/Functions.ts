//----------SYNTAX----------------------------------------------------------------
/*
function name(parameter: type, parameter: type,...){
    //do something
}*/
//ex
/*
function add(a: number, b: number): number{
    return a+b;

}
let result: number= add(1,3);
console.log(result);
*/

//--------------TYPESCRIPT FUNCTION TYPES--------------------------------------------

/*A function type has two parts: parameters ad return type. When declaring
a function type, you need to specify both parts with the following syntax;
(parameter: type, parameter: type,.....)=> type
*/
/*
let add : (x:number, y: number)=> number;
add = function(x: number,y: number){
    return x+y;
};
*/

//also
/*
let add: (a:number, b:number)=> number=
    function (x: number, y:number){
        return x+y;
 };
 console.log(add(3,4));
*/
// In this example, we reassigned a function, whose type doesn't match, to the add Functino variable.
/*
add = function(x:string, y: string): number{
    return x.concat(y).length;
 };
*/

//Inferring function types
//TypeScript compiler can figure out the function type when you have the type on one side of the equation.
// This form of type inference is calll contextual typing.


//-----------OPTIONAL PARAMETERS----------------------------------------------------------------
//1:- to Make a function parameter optional, use the "?".
//eg.

/*
function multiply(a: number, b: number, c?:number){
    if(typeof c!=='undefined'){
        return a*b*c;
    }
    return a*b;
}
console.log(multiply(2,4,2));
*/
//-----------TYPESCRIPT DEFAULT PARAMETERS------------------------------------
//syntax
/*
function name(parameter1: type= defaulValue1,parameter2:type=defalutValue2,....){
    //do something
}
*/
/*
function applyDiscount(price: number, discount: number = 0.05): number{
    return price *(1-discount);
}
console.log(applyDiscount(100));
*/
//-----TYPESCRIPT REST PARAMETERS-------------------------------------------
//1:- a FUNCTION has only one rest parameter
//2:- The rest parameter appears last in the parameter list.
//3:- The type of the rest parameter is an array type.
/*
function fn(...rest: type[]){
    //do something
}
*/

/*
function getTotal(...numbers: number[]): number{
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
}

console.log(getTotal());
*/

//----------------TYPESCRIPT FUNCTION OVERLOADING------------------------------------------
/* WE have two funcions, addNumbers and addStrings takes two arugments and returns sum of two numbers
and concatenation of two strings respectively.
***It's possible to use a Union type to define a range of types for function parameters and results.
*/
/*
function add(a: number | string, b: number | string): number|string{
    if(typeof a==='number' && typeof b==='number')
    return a+b;
    if(typeof a==='string' && typeof b==='string')
    return a+b;
}
*/
//--------METHOD OVERLOADING----------------------------------------------------
//When a function is a property of a class, it is called a method. TypeScript is also supports
// method overloading

class Counter{
    private current: number =0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[]{
        if( target){
            let values =[];
            for( let start = this.current; start<=target; start++){
                values.push(start);
            }
            this.current= target;
        return values;
        }
        return ++this.current;
    }
    
}
let counter = new Counter();
console.log(counter.count(20));
