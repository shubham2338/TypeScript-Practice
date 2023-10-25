interface IA{
    a: number;
}
interface IB{
    b: number;

}
function X(obj: IA & IB ){
    return obj.a + obj.b;

}
interface IC{
    c: number;
}
function X(obj: IA & IB & IC){
    return obj.a + obj.b +obj.c;
}

function combine(obhA, objB){
    return {...objA, ...objB};
}
const objA = {a: 1};
const objB = {b: 2};
const resultObj = combine(objA, objB);