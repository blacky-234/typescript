var Employees = /** @class */ (function () {
    function Employees() {
        this.name = 'hello inside field'; // class inside field
        this._age = 30; // private field
    }
    Object.defineProperty(Employees.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Employees.prototype.PrintName = function () {
        console.log(this.name);
    };
    return Employees;
}());
var emps = new Employees();
console.log(emps.age);
