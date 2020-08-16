// TYPES
// boolean
var isCool = true;
// number
var favNumber = 69;
// string
var rapName = "lil nutsack";
// array
var pets = ["ferguson", "happy"];
var pets2 = ["test", "nick"];
// object
var lizards = {
    a: "gecko",
    b: "geico"
};
// null and undefined
var meh = undefined;
var no = null;
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeNumberAsString = Size[2]; // medium
var sizeNumberAsNumber = Size.Medium; // 2
// Any !!!!!!!!!!!!!! not recommended
var whateverYouWant = "asdlfkj";
whateverYouWant = 42069;
// void
var sing = function () {
    // doesn't return anything
    console.log("yup");
};
// never
// function never returns
// variable is never true
var error = function () {
    throw new Error("test");
};
var fightRobotArmy = function (robots) {
    console.log("fight");
};
// same thing as above
var fightRobotArmy2 = function (robots) {
    console.log("fight");
};
var dog = {};
// function
var fightRobotArmy3 = function (robots) {
    console.log("fight");
};
var fightRobotArmy4 = function (robots) {
    console.log("fight");
    return 5;
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalala"; // default is public
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("rawr");
lion.greet();
// union
var confused = "hello";
var numberMaybe = 42;
var booleanPossibly = false;
// inferred (throws error)
// let x = 4;
// x = "hello";
