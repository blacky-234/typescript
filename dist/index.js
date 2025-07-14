"use strict";
let sales = 12345678;
let course = 'typescript';
let is_piblished = true;
let level;
let any_array = [1, 2, '3'];
let num_arr = [1, 2, 3];
let user = [1, 'hello world'];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
let mediumsize = Size.medium;
console.log("midim Size :", mediumsize);
var sizes;
(function (sizes) {
    sizes[sizes["smalls"] = 1] = "smalls";
    sizes[sizes["mediums"] = 2] = "mediums";
    sizes[sizes["larges"] = 3] = "larges";
})(sizes || (sizes = {}));
let smallsize = sizes.mediums;
console.log("smallsize :", smallsize);
function calculateTax(income) {
    if (income > 500) {
        return income * 100;
    }
    return 0;
}
function username(name) {
    if (name == 'a') {
        return name;
    }
    else {
        const username = 'hello world';
        return username;
    }
}
calculateTax(10000);
username('a');
let employee = {
    id: 1,
    name: 'hello world',
    retire: (date) => {
        console.log("hello: ", date);
    }
};
//# sourceMappingURL=index.js.map