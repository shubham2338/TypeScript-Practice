/*
interface Cart{
    calculateTotal(): number;

}

interface Cart{
    x: number;
}

interface Cart{
    calculateTotal(options: {discountCode: number}): number;

}
let myCart: Cart= {
    x: 1,
    calculateTotal(options?:{discountCode: number}){
        if(options && options.discountCode){

        }
        return 1;
    }
}
*/


/*
namespace MyNamespace{
    export const x: number =10;
    export interface SomeInterface{
        y: number;
    }
}

namespace MyNamespace{
    export const getX= ()=> X;
    export interface SomeInterface{
        x: number;
    }
}
MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface={
    x: 1,
    y: 2
}

*/
 
/*

class Salad{
   
}
namespace Salad{
    export const availablebeDressings = ['olive oil', 'yoghurt'];
}
Salad.availablebeDressings.includes('olive oil');

enum Vegetables{
    Tomato ='tomato',
    Onion = 'Onion'
}
namespace Vegetables{
    export function makeSalad(){
        return Vegetables.Tomato+Vegetables.Onion;
    }
}
const salad = Vegetables.makeSalad();
*/

import * as React from 'react';

declare module 'react' {
    interface Component{
        helloWorld(): string;
    }
}
React.Component.prototype.helloWorld = function(){
    return 'hello world';
};