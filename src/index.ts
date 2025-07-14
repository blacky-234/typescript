let sales: number = 12345678;
let course: string='typescript';
let is_piblished: boolean = true;
let level;   // any

// Array of Example
let any_array = [1,2,'3']
let num_arr: number[] = [1,2,3]

// Tuple

let user: [number, string] = [1, 'hello world']

// Enum

const small = 1;
const medium = 2;
const large = 3;

//PascalCase

enum Size {small, medium, large }

let mediumsize: Size = Size.medium
console.log("midim Size :",mediumsize)

enum sizes {smalls =1, mediums, larges }

let smallsize: sizes = sizes.mediums;
console.log("smallsize :",smallsize)

// functions

function calculateTax(income: number): number{
    if(income > 500){
        return income*100
    }
    return 0;
}

function username(name: string): string {
    if(name=='a'){
        return name
    }else{
        const username: string = 'hello world'
        return username
    }
}

calculateTax(10000);
username('a')

// objects

let employee: {
    readonly id: number
    name: string,
    retire: (date: Date)=> void
} = {
    id: 1, 
    name: 'hello world',
    retire: (date: Date) => {
        console.log("hello: ",date)
    }
}

// Advance Type Script

