var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.helloworld = function () {
        console.log("hello world");
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.helloworld();
