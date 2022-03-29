// let str:string;
// str = "10";
// function fun(op1: number, op2: number): number {
//     return op1 * op2;
// }
// let a = fun(2, 2);
// a = 10;
// let b = 10;
// let d = b - +"10";
// if (str) {
//     console.log(str);
// }
// function fun1(s:string): boolean {
//     return !!s;
// }
// let vf: (n1:number, n2:number) => string;
// function fun4(op1:number, op2:number):string {
//     return op1 + op2 + "";
// }
// vf = fun4;
// console.log(vf(2, 2));
// function sum(ar: number[]): number {
//     return ar.reduce((res, cur) => res + cur);
// }
// let ar: Array<number> = [1, 2, 3];
// ar.push(12);
// console.log(sum(ar))
// let set = new Set<number>([1,1,1,2,2,2,3,3]);
// console.log(set);
// set.forEach(e => console.log(e));
// set.add(10);
// const ar1 = Array.from(set);
// console.log(ar1)
// console.log(set.has(10));
// console.log(sum(ar1));

// const mapMonths = new Map<number, string>([
//     [1, "Januar"], [2, "Februar"], [3, "March"]
// ])
// mapMonths.set(4, 'April');
// mapMonths.set(1, 'Jan');
// console.log(mapMonths);
// // console.log(mapMonths.get(5));
// // console.log(mapMonths.has(5));
// const arEntries = Array.from(mapMonths); //array of entries
// console.log(arEntries); 
// const arKeys = Array.from(mapMonths.keys());
// console.log(arKeys);
// arEntries.push([6, 'hhhh']);
// arKeys.push(10);
// console.log(arKeys);
// const arValues = Array.from(mapMonths.values());
// arValues.push("10");
// console.log(arValues);

// type Person = {
//     id: number;
//     name: string;
//     age?: number;
//     city?: string;
// }
// function createPerson(id: number, name: string): Person {
//     return {id, name};
// }
// console.log(createPerson(123, 'Vasya'));
// let person: Person = {id: 100, name: 'Moshe', age: 20, city: 'Lod'};
// let persons: Person[] = [];
// persons.push(person);

// function strLength(str: string): number {
//     return str.length;
// }
// console.log(strLength(persons[0].city));

/********************HW #32**********************/

function intersection(set1: Set<number>, set2: Set<number>): number[] {
    let set = new Set<number>([...set1].filter(e => set2.has(e)));
    return Array.from(set);
};

function subtract(set1: Set<number>, set2: Set<number>): number[] {
    let set = new Set<number>([...set1].filter(e => !set2.has(e)));
    return Array.from(set);
};

let set1 = new Set<number>([1,1,1,2,2,2,3,3,3]);
let set2 = new Set<number>([2,2,2,3,3,3,4,4,4]);
console.log(intersection(set1, set2));
console.log(subtract(set1, set2));


type Occurrency = {
    str: string;
    count: number;
}

function getSortedOccurrences (array: string[]): Occurrency[] {
    const map = new Map<string, number>()
    let count = array.reduce((acc, current) => {acc[current] == undefined ? acc[current] = 1 : acc[current]++; return acc}, {});
    let keys = Object.keys(count);
    let values = Object.keys(count).map(key => count[key]);
    for(let i = 0; i < keys.length; i++) {
        map.set(keys[i], values[i])
    }
    let arrMap = Array.from(map);
    arrMap.sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res == 0 ? e1[0].localeCompare(e2[0]) : res;
    })
    let result = [];
    for(let i = 0; i < arrMap.length; i++) {
        result.push({str: arrMap[i][0], count: arrMap[i][1]});
    }
    return result;
}

let arr: Array<string> = ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn'];
console.log(getSortedOccurrences(arr));

/************************************************/