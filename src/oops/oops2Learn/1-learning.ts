class Employees{
    name:string = 'hello inside field' // class inside field
    
    private _age:number = 30 // private field not accessible outside the class example: emps._age
    firstname:string
    p_age:number
    readonly _lastname:string //setter only  construct time and access anywhere, 

    constructor(firstname:string, p_age:number, lastname:string){  // constructor
        this.firstname = firstname
        this.p_age = p_age
        this._lastname = lastname       //'Smith' 0r lastname
    }

    get age():number{   //this is getter
        return this._age
    }

    set age(value:number){   //this is setter
        this._age = value
    }



    PrintName():void{
        console.log(this.name)
    }

    PrintFullName():void{
        console.log(`${this.firstname} ${this._lastname}`)
    }

    AgeCaluculator():number{
        return this._age - this.p_age
    }
}

const emps:Employees = new Employees('John', 30, 'Smith')
console.log(emps.age)