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
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(2, 4));
