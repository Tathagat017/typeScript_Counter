declare let first_name: number | string;
declare let suri: boolean;
declare let poori: Array<number | string>;
type user = {
    name: string;
    id: number;
    address: string;
    present: boolean;
    age: string;
};
declare let obj: user;
declare let arrObject: Array<object>;
type objArr = {
    name: string[];
    scores: number[];
};
declare let arrObje2: user[];
declare let objArray: objArr;
type developer = {
    name: string;
    age: string;
    tech: string;
};
declare let ia: user & developer;
