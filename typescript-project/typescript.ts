// TYPES

// boolean
let isCool: boolean = true;

// number
let favNumber: number = 69;

// string
let rapName: string = "lil nutsack";

// array
let pets: string[] = ["ferguson", "happy"];
let pets2: Array<string> = ["test", "nick"];

// object
let lizards: object = {
  a: "gecko",
  b: "geico",
};

// null and undefined
let meh: undefined = undefined;
let no: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeNumberAsString: string = Size[2]; // medium
let sizeNumberAsNumber: number = Size.Medium; // 2

// Any !!!!!!!!!!!!!! not recommended
let whateverYouWant: any = "asdlfkj";
whateverYouWant = 42069;

// void
let sing = (): void => {
  // doesn't return anything
  console.log("yup");
};

// never
// function never returns
// variable is never true
let error = (): never => {
  throw new Error("test");
};

// interface - good for objects and props for react
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; // question mark means optional
}

type RobotArmy2 = {
  count: number;
  type: string;
  magic: string;
};

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("fight");
};

// same thing as above
let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic: string;
}) => {
  console.log("fight");
};

// type assertions
interface DogArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as DogArmy;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("fight");
};

let fightRobotArmy4 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("fight");
  return 5;
};

// class
class Animal {
  private sing: string = "lalala"; // default is public
  constructor(sound: string) {
    this.sing = sound;
  }
  greet(): string {
    return `hello ${this.sing}`;
  }
}

let lion = new Animal("rawr");
lion.greet();

// union
let confused: string | number = "hello";
let numberMaybe: string | number = 42;
let booleanPossibly: string | number | boolean = false;

// inferred (throws error)
// let x = 4;
// x = "hello";
