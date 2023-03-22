console.log("hello world!");
let first_name: number | string = "Tathagat";
first_name = 17;
first_name = 0.11;
let suri: boolean = false;
let poori: Array<number | string> = [1, 2, 3];
type user = {
  name: string;
  id: number;
  address: string;
  present: boolean;
  age: string;
};

let obj: user = {
  name: "raj",
  id: 12,
  address: "1 bond street",
  present: false,
  age: "22",
};
//Array of Objects
//Object with array inside

let arrObject: Array<object> = [{}, {}];
arrObject = [{}];
type objArr = {
  name: string[];
  scores: number[];
};

let arrObje2: user[] = [
  {
    name: "raj",
    id: 12,
    address: "1 bond street",
    present: false,
    age: "22",
  },
];

let objArray: objArr = {
  name: ["raj", "baj"],
  scores: [1, 2],
};

type developer = { name: string; age: string; tech: string };

let ia: user & developer = {
  name: "raj",
  id: 12,
  address: "1 bond street",
  present: false,
  age: "22",
  tech: "MERN",
};

//age type number creates error never
