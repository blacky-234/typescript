// Type Aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employees: Employee={
    id: 1, 
    name: 'hello world',
    retire: (date: Date) => {
        console.log("hello: ",date)
    }
}